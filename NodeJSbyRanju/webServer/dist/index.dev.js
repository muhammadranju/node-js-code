"use strict";

var url = require('url');

var http = require('http');

var server = http.createServer(function (req, res) {
  // console.log(req.url);
  if (req.url == '/') {
    res.writeHead(200);
    res.end('<h1>Hello thie is home page</h1>');
  } else if (req.url == '/contact') {
    res.end('<h1>Hello thie is contact page</h1>');
  } else if (req.url == '/about') {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end('<h1>Hello thie is about page</h1>');
  } else {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end('<h1>Sorry page not fount 404 error</h1>');
  }
});
server.listen(8000, function (err, res) {
  console.log("Successfully Work Port 8000");
});