var expect = require('chai').expect;
var app = require('../src/app');
var http = require('http');
var bl = require('bl');


describe('Hello World', function() {

  it('True should be true', function() {
    expect(true).to.be.true;
  });

});

it('localhost:4400/bingo should be return The bingo game is already started and known numbers are 31, 10, 80, 44, 66', function(){
  var reponse = http.get("http://127.0.0.1:4400/bingo", function(response){
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))
  });
  expect(reponse.to.deep.eql('The bingo game is already started and known numbers are 31, 10, 80, 44, 66'));
})