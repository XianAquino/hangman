var http = require('http');
var fs = require('fs');
var util = require('./util.js');
var nStatic = require('node-static');
var fileServer = new nStatic.Server('../client');
var path = require('path');

var ip = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(request,response){
  var filePath = '.' + request.url;
  if (filePath == './'){
    filePath = './client/index.html';
  }else if(filePath === './secretWord'){
   fs.readFile(__dirname + '/data/dictionary.txt','utf-8', function(err,data){
     if(err){
       console.log("error:",err);
     }else{
       var secretWord = util.pickWord(data.split('\n'));
       res.writeHead(200, "Content-Type:application/json");
       res.end(JSON.stringify(secretWord));
     }
   });
  }

  var extname = String(path.extname(filePath)).toLowerCase();
  var contentType = 'text/html';
  var mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
  };

  contentType = mimeTypes[extname];

  fs.readFile(filePath, function(error, content) {
    // if (error) {
    //   if(error.code == 'ENOENT'){
    //       fs.readFile('./404.html', function(error, content) {
    //           response.writeHead(200, { 'Content-Type': contentType });
    //           response.end(content);
    //       });
    //   }
    // }
    // else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content);
    // }
  });
});


console.log(`Listening on port: ${port}`);

server.listen(port,ip);
