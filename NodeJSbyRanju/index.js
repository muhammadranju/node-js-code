// const fs= require('fs');

// fs.mkdirSync("Ranju");
// fs.writeFileSync("bio.txt", "Hello");
// fs.appendFileSync("Ranju/bio.txt", "I am Ranju");

// const data = fs.readFileSync("Ranju/bio.txt","utf8");
// console.log(data);
// fs.renameSync("Ranju/mybio.txt", "Ranju/myBio.txt")

// fs.unlinkSync("Ranju/myBio.txt");
// fs.rmdirSync("Ranju");

// fs.mkdir("ranju",(err)=>{
//     console.log("Ok now is work");
// });

// fs.writeFile("bio.txt", "Hello my friend",(err)=>{
//     console.log("ok",err);

// });
// fs.appendFile("bio.txt","today iam vary happy",(err)=>{
// console.log("wow nice",err);
// });

// fs.readFile("bio.txt","utf8",(err,data)=>{
//     console.log(data);
// });

// fs.mkdir("ranju",(err)=>{
//     console.log("File Created successfully");
// });

// fs.writeFile("ranju/bio.txt","Hello Ranju Hi",(err)=>{
// console.log("File Created successfully",err);
// });

// fs.appendFile("ranju/bio.txt"," Iam Ranju Ismal",(err)=>{
//     console.log("File Created successfully",err);
// })

// fs.readFile("ranju/bio.txt","utf8",(err,data)=>{
//     console.log(data);
// });

// fs.rename("ranju/bio.txt","ranju/myBio.txt",(err)=>{
//     console.log("File Created successfully",err);
// });

// fs.unlink("ranju/myBio.txt",(err)=>{
//     console.log("File Created successfully",err);
// });

// fs.unlink("./ranju",(err)=>{
//     console.log("File delete successfully",err);
// });

const url = require("url");
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        res.writeHead(200);
        res.end("<h1>Hello thie is home page</h1>");
    } else if (req.url == "/contact") {
        res.end("<h1>Hello thie is contact page</h1>");
    } else if (req.url == "/about") {
        res.writeHead(200, {
            "Content-type": "text/html",
        });
        res.end("<h1>Hello thie is about page</h1>");
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
        });
        res.end("<h1>Sorry page not fount 404 error</h1>");
    }
});
server.listen(8080, (err, res) => {
    console.log("Yes Successfully Port 8000 is Work ");
});
