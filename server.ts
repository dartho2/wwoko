import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import { AppServerModule } from './src/main.server';

import * as express from 'express';
import {join} from 'path';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
// const app = express();
const expresss = require('express');
const path = require('path');
const app = express();
const http = require('http');
const https = require('https');
const fs = require('fs');
const privateKey = fs.readFileSync('./cert/key.key');
const certyficate = fs.readFileSync('./cert/crt.crt');
const credentials = {
  key: privateKey,
  cert: certyficate
}

app.use(function(req, res, next) {
  if (req.secure) {
      next();
  } else {
      res.redirect('https://' + req.headers.host + req.url);
  }
});
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

const PORT = process.env.PORT || 4000;
const DIST_FOLDER =  join(process.cwd(), 'dist/wooko/browser');

const indexHtml = existsSync(join(DIST_FOLDER, 'index.original.html')) ? 'index.original.html' : 'index';
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
// const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Server static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
});

// Start up the Node server
// app.listen(PORT, () => {
//   console.log(`Node Express server listening on http://localhost:${PORT}`);
// });
httpServer.listen(80, () => {
  console.log('Server Https started on 80')
});

httpsServer.listen(443, () => {
  console.log('Server Https started on 443')
});