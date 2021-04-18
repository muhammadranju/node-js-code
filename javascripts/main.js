let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write("<h1>This is Home page</h1>");
        res.end();
    } else if (req.url == "/about") {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write("<h1>This is About page</h1>");
        res.end();
    } else if (req.url == "/contect") {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write("<h1>This is Contect page</h1>");
        res.end();
    }
});

server.listen(81);
console.log("Server Success to run");
