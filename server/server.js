var http = require('http');
var fs = require('fs');
var util = require('./util.js');

var ip = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req,res){

  if(req.method === 'GET'){
    if(req.url === '/') {
      fs.readFile(__dirname + '/../client/index.html', function(err,data){
        res.writeHead(200, "Content-Type:application/html");
        res.end(data);
      })
    }
    else if(req.url === '/secretWord') {
      fs.readFile(__dirname + '/data/dictionary.txt','utf-8', function(err,data){
        if(err){
          console.log("error:",err);
        }else{
          var secretWord = util.pickWord(data.split('\n'));
          res.writeHead(200, "Content-Type:application/json");
          res.end(JSON.stringify(secretWord));
        }
      })
    }
  }
});

console.log(`Listening on port: ${port}`);

server.listen(port,ip);
