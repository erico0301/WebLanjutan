var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const fs = require('fs')
const path = require('path')
var logger = require("morgan");

app.use(logger("dev"));

app.use(express.static(__dirname+"/public"));

app.get("/api/crud", function(req,res){
    let rowData = fs.readFileSync(path.resolve(__dirname, 'datamhs.json'));
    let mhs = JSON.parse(rowData);
    res.json(mhs);
})

app.get("/api/crud/:nim", function(req, res){
    let nim = req.params.nim;
    
    let rowData = fs.readFileSync(path.resolve(__dirname, 'datamhs.json'));
    let mhs = JSON.parse(rowData);
    let pickMhs;
    let length = Object.keys(mhs).length;
    
    for (var i=0;i<length;i++){
        if(mhs[i].nim == nim){
            pickMhs = mhs[i];
        }
    }
    res.json(pickMhs);
})

app.delete("api/crud",(req, res)=>{
    res.send("Deleted");
})


var data = bodyParser.urlencoded({extended: false});
app.post("/api/postData", data, function(req, res){
    var obj = {
        "nim": "181110303",
        "nama": "Boli",
        "kelas": "MW-B Sore",
        "hp": "085270049294"
    }
    let rowData = fs.readFileSync(path.resolve(__dirname, 'datamhs.json'),"utf-8");
    let mhs = JSON.parse(rowData);
    mhs.push(obj);
    rowData = JSON.stringify(mhs);
    fs.writeFileSync(path.resolve(__dirname, 'datamhs.json'), rowData, "utf-8")
    
    res.send("data posted")
})

app.put("/api/change/:nim"), function(req, res){
    res.send(req.nim);
}

app.listen(4000, function(){
    console.log("Server Started");
});