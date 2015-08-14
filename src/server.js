var express = require('express');
var app = express();
var config = require("./config.js");

app.use(express.static(__dirname + '/frontend'));

app.listen(config.port);
console.log("the callMe app runs on:", config.port);
