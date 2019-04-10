const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ecologicalTips = require('./server/database').default;

/**const water = require('./drawable/water.jpg');
const educateothers = require('./drawable/educateothers.jpg');
const plasticbags = require('./drawable/plasticbags.jpg');
const publictransport = require('./drawable/publictransport.jpg');
const recycle = require('./drawable/recycle.jpg');
const smartshopping = require('./drawable/smartshopping.jpg');
 **/

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/getTips', function(req, res) {
  return res.send(ecologicalTips);
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
let port = process.env.PORT || 8080;
console.log('App is listening on port ' + port);
