const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("hello from other side");
});

server.listen(8000,()=>{
    console.log("listening port");
});