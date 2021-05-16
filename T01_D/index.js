const http = require("http");
const fs = require("fs");

http
    .createServer(function (req, res){
        //method Read File
        //body in html file
        fs.readFile("publik/index.html", (err,data)=>{
            if(err) throw err;
            //Header
            //Status
            res.writeHead(200, {"Content-type" : "text/html"});
            res.write(data);
            res.end();
        });
    }).listen(3000); 