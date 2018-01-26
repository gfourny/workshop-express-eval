var express = require('express');
const app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', function(req, res){
    res.end("express");
});

app.get('/bingo', function(req, res){
    var file = fs.readFileSync("numbers.txt");
    var content = file.toString().split(" ").join(', ');
    var numbers = req.param('mynumbers');
    numbers = numbers.split(',').join(', ');
    if(numbers == content){
        res.end('Bingo')
    } else {
        res.end("The bingo game is already started, sorry your numbers doesn't match with known numbers 31, 10, 80, 44, 66 ; so you can not say Bingo")
    }
    res.send('The bingo game is already started and known numbers are 31, 10, 80, 44, 66');
});

module.exports = app;