var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Hello 1 from Node Server App deployed on ECS with CodePipeline!');
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
