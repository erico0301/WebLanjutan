var fs = require("fs");
let fileName = "tempFile.txt"

fs.open(fileName, "r", function(err, file){
    if (err) throw err;

    fs.readFile( fileName, (err, data)=>{
        if(err) throw err;
        console.log(data.toString("utf8"));
    });

    
});