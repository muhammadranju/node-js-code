"use strict";

var fs = require("fs");

var http = require("http");

var server = http.createServer(function (req, res) {});
server.listen(81);
console.log("Server Success to run");
