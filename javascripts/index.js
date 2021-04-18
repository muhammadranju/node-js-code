let fs = require("fs");
let http = require("http");

let server = http.createServer(function (req, res) {
    if (req.url == "/") {
        let data = fs.readFile("home.html", "utf8", function (err) {
            res.end(data);
        });
    } else if (req.url == "/content") {
        let data = fs.readFile("content.html", "utf8", function (err) {
            res.end(data);
        });
    } else if (req.url == "/about") {
        let data = fs.readFile("about.html", "utf8", function (err) {
            res.end(data);
        });
    } else if (req.url == "/ranju") {
        let data = fs.readFile("ranju.html", "utf8", function (err) {
            res.end(data);
        });
    }
});

server.listen(8081);
console.log("Server Success to run");
