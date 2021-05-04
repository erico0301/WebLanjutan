const http = require("http");

http    
    .createServer(function(req,res){
        
        //Menampilkan request error
        req.on("error", (err)=>{
            console.error(err.stack);
        })
        req.end();
        
        //Respon web client dengan error code 404
        res.statusCode = 404;
        res.end();
    }).listen(3000)