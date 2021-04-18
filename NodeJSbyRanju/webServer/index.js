const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
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
server.listen(8000, (err, res) => {
    console.log("Yes Successfully Port 8000 is Work ");
});