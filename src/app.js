var express = require('express');
const app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

function readFileNumbers(){
    var file = fs.readFileSync("numbers.txt");
    return file.toString().split(" ").join(', ');
}

app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', function(req, res){
    res.end("express");
});

app.get('/bingo', function(req, res){
    
    var numbers = req.param('mynumbers');
    if(numbers == undefined) {
        res.send('The bingo game is already started and known numbers are 31, 10, 80, 44, 66');
    }
    
    numbers = numbers.split(',').join(', ');
    
    if(numbers == readFileNumbers()){
        res.end('Bingo')
    } else {
        res.end("The bingo game is already started, sorry your numbers doesn't match with known numbers 31, 10, 80, 44, 66 ; so you can not say Bingo")
    }
});

module.exports = app;