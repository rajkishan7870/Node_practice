const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("hello from home side");
    }
    else if(req.url == '/contact'){
        res.end("hello from contact side");
    }
    else if(req.url == '/about'){
        res.end("hello from about side");
    }
    else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("<h1>404 error page!!</h1>")
    }
    
});

server.listen(8000,()=>{
    console.log("listening port");
});