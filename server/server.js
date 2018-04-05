var express = require('express');
var app = new express();
const port = process.env.PORT || 3000;
var static = express.static('build');

app.use(static);
app.listen(port);