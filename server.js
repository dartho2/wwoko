global['window'] = window;
const express = require('express');
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

app.use(express.static('./dist/wooko'));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/wooko/index.html'));
});

httpServer.listen(80, () => {
  console.log('Server Https started on 80')
});

httpsServer.listen(443, () => {
  console.log('Server Https started on 443')
});
