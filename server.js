// local server
const express = require('express');
const notifier = require('node-notifier');

const app = express();
const port = 8000;
const prod = process.env.NODE_ENV === 'production';

app.use(express.static(`${__dirname}/${ !prod ? 'dist' : 'dist_prod' }`, {
  setHeaders: function (res) {
    res.append('Access-Control-Allow-Origin', '*');
  }
}));

app.listen(port, function () {
  console.log('Express server listening on port ' + port + '\n\nhttp://127.0.0.1:' + port + '\n');
});
