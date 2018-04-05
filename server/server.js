var express = require('express');
var app = new express();
var static = express.static('build');

app.use(static);
app.listen(9080);