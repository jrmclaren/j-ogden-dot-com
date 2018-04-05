var express = require('express');
var app = new express();
const port = process.env.PORT || 3000;
var public = express.static('build');

app.use(public);
app.listen(port);