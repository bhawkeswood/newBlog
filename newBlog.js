var http = require("http");
var url = require("url");

function renderNewPostForm(request, response) {
  response.writeHead(200, {
    "Content-type": "text/plain"
  });
  response.end("Hello World");
}

function render404(request, response) {
  response.writeHead(404);
  response.end("404, File not Found");
}

var server = http.createServer(function(request, response) {
  var newPostFormRegex = new RegExp("^/posts/new/?$");
  var pathname = url.parse(request.url).pathname;
  if (newPostFormRegex.test(pathname)) {
    renderNewPostForm(request, response);
  } else {
    render404(request, response);
  }
  renderNewPostForm(request, response);
});

server.listen(8000);

console.log('listening on http://127.0.0.1:8000');
