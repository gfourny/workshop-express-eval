var express = require('express');
const app = express();

app.get('/home', function(req, res){
    res.end("express");
})

module.exports = app;