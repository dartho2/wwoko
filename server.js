const express = require('express');
const path = require('path');
const app = express();
global['window'] = window;
app.use(express.static('./dist/wooko'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/wooko/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started');
});
