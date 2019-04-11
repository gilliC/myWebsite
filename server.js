var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ecologicalTips = require('./database').default;

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/getPicture/:path', function(req, res) {
  res.sendFile(__dirname + `/server/drawable/${req.params.path}.jpg`);
});

app.get('/api/getTips', function(req, res) {
  return res.send(ecologicalTips);
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

let port = process.env.PORT || 5000;
app.listen(port);
console.log('App is listening on port ' + port);
