//OBJECTIVE: Create a server that...
//uses the http and fs modules
//sends an html page back to the client upon request.
//You must have at minimum two html pages with corresponding routes, and a 404 not found page.

const http = require("http");
const fs = require("fs");
const port = 3000;

function getContent(method, url, res) {
  switch (url) {
    case "/":
      console.log(`${method} request from ${url}`);
      readFile("./pages/home.html", res);
      break;
    case "/about":
      console.log(`${method} request from ${url} faijbnaioluwbe`);
      readFile("./pages/about.html", res);
      break;
    default:
      console.log(`404 Not Found! url: ${url}`);
      readFile("./pages/404.html", res);
  }
}

http
  .createServer((req, res) => {
    getContent(req.method, req.url, res);
  })
  .listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
