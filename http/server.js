const http = require("http");

function handleRequest(request, response) {
  response.write("<h1>Hello Web!!</h1>");
  response.end();
}

const server = http.createServer(handleRequest);

server.listen(3000);
