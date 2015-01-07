var http = require("http");

function renderNewPostForm(request, response) {
  response.writeHead(200, {
    "Content-type": "text/plain"
  });
  response.end("Hello World");
}

var server = http.createServer(function(request, response) {
  var newPostFormRegex = new RegExp("^/posts/new/?$");
  renderNewPostForm(request, response);
});

server.listen(8000);

console.log('listening on http://127.0.0.1:8000');
