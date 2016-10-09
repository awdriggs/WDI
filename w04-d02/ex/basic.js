//Lets require/import the HTTP module
var http = require('http');

//declare a global variable that will be our port
PORT = 3000;

//We need a callback function which handles requests and send responses
var serverLogic = function (request, response){
  // console.log(request);
  //console.log(request.headers);
  console.log(request.url);

  var serveUP = 'hello'
  // if(request.url == '/cheese'){
  //   serveUP = "camembert";
  // }

  var URL = request.url;
  
  var splitUP = URL.substring(0, 5);
  if(splitUP == '/echo'){
    serveUP = URL.substring(5);
  }
  //var browser = request.headers['user-agent'];
  
  // //make a response to the request
  //var randomNum = Math.floor(Math.random()*1000);
  
  //serveUP = response.headers.user-agent;
  //return paramater has to be a string
  response.end(serveUP);
};

//Create a server
var server = http.createServer( serverLogic );

//we need a function that executes when we are sucessfully listening on a port
var portListeningCallback = function(){

  console.log("Server listening on: http://localhost:%s", PORT);
}

//Lets start our server, by telling it to listen to a given port on our computer
server.listen(PORT, portListeningCallback);
























  //response.end("hello world");
  //response.end("<h1>hello world</h1>");
  /*
    response.end("<html>"+
      "<head>"+
      "</head>"+
      "<body>"+
      "<h1>hello world</h1>"+
      "</body>"+
    "</html>");
  */
