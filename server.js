var path = require('path');
var express = require('express');

var app = express();

var staticPath = __dirname;
app.use(express.static(staticPath));

app.listen(8261, function() {
  console.log('listening');
});
