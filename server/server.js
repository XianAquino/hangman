var http = require('http');
var fs = require('fs');

var ip = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req,res){

  if(req.method === 'GET' && req.url === '/secretWord'){

    fs.readFile(__dirname + '/data/dictionary.txt','utf-8', function(err,data){
      if(err){
        console.log("error:",err);
      }
      var secretWord = pickWord(data.split('\n'));
      console.log(secretWord);
    })
  }

});
console.log(`Listening on port: ${port}`);

server.listen(port,ip);

var pickWord = function(dictionary) {
  var randomIndex = Math.floor(Math.random()*(dictionary.length-0));
  return dictionary[randomIndex];
}
