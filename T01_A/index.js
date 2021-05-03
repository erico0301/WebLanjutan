const http = require("http");

http
    .createServer(function(req, res){
        res.write("Tugas 1 : Web server dengan menggunakan nodejs");

        res.end();
    })
    .listen(3000);


    