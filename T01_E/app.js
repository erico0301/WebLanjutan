var express = require("express");
var server = express();

var logger = require("morgan");

server.use(logger("dev"));

server.use(express.static(__dirname + "/publik"));

server.listen(3000, function(){
    console.log("Server run");
});