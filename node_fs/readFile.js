const { readFile, existsSync, exists } = require("fs");

// a function that logs the data from a file to the console
function readFileToConsole(filePath) {
  if (existsSync(filePath)) {
    readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log(data.toString());
      }
    });
  } else {
    console.log(`File does not exist: ${filePath}`);
  }
}

//For use within an http server. Takes in a file path
// and an http response if one is passed in
// or else simply log the data to the console
function readFileWithRes(filePath, res = false) {
  if (existsSync(filePath)) {
    readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        if (res) {
          console.log("response: err 404");
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>404 Not Found<h1>");
          return;
        }
      }
      if (res) {
        console.log("response: data");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        console.log(data.toString());
      }
    });
  } else {
    console.log(`File does not exist: ${filePath}`);
    if (res) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found<h1>");
    }
  }
}

const testFilePath = "./HelloWorld.txt";

readFileToConsole(testFilePath); //For the basic Exercise

module.exports = { readFileWithRes }; //export for use in other modules/files
