//OBJECTIVE: Create a server that...
//uses the http and fs modules
//sends an html page back to the client upon request.
//You must have at minimum two html pages with corresponding routes, and a 404 not found page.

const http = require("http");
const { readFileWithRes } = require("./node_fs/readFile");

const port = 3000;

function getContent(method, url, res) {
  switch (url) {
    case "/":
      console.log(`${method} request from ${url}`);
      readFileWithRes("./pages/home.html", res);
      break;
    case "/about":
      console.log(`${method} request from ${url} faijbnaioluwbe`);
      readFileWithRes("./pages/about.html", res);
      break;
    default:
      console.log(`404 Not Found! url: ${url}`);
      readFileWithRes("./pages/404.html", res);
  }
}

http
  .createServer((req, res) => {
    getContent(req.method, req.url, res);
  })
  .listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
