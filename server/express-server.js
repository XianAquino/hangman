var express = require('express');
var app = express();
var fs = require('fs');
var util = require('./util.js')

var port = 3010;
var ip = '127.0.0.1';

app.use(express.static('client'));

app.get('/', function(req,res){
  res.status(200).sendFile('index.html')
});

app.get('/secretWord',function(req,res){
  fs.readFile(__dirname + '/data/dictionary.txt','utf-8', function(err,data){
    if(err){
      console.log("error:",err);
    }else{
      var secretWord = util.pickWord(data.split('\n'));
      res.json(secretWord);
    }
  });
})

app.listen(port,ip);
console.log(`Listening on port: ${port}`)
