var express = require('express');
const app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', function(req, res){
    res.end("express");
})

app.get('/bingo', function(req, res){
   // res.end("Bingo");
    var file = fs.readFileSync("numbers.txt");
    var content = file.toString().split(" ").join(', ');
    res.end(content);
})

module.exports = app;