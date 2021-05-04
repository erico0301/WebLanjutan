var fs = require("fs");
let fileName = "tempFile.txt";
let addText = "\nSelesai";

try{
    fs.appendFileSync(fileName, addText);
    console.log("Berhasil ditambah");
}catch(err){
    console.error(err);
}