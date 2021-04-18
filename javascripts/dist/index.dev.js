"use strict";

var fs = require("fs");

var http = require("http");

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        var data = fs.readFile("home.html", "utf8", function (err) {
            res.end(data);
        });
    } else if (req.url == "/content") {
        var _data = fs.readFile("content.html", "utf8", function (err) {
            res.end(_data);
        });
    } else if (req.url == "/about") {
        var _data2 = fs.readFile("about.html", "utf8", function (err) {
            res.end(_data2);
        });
    } else if (req.url == "/ranju") {
        var _data3 = fs.readFile("ranju.html", "utf8", function (err) {
            res.end(_data3);
        });
    }
});
server.listen(8081);
console.log("Server Success to run");
