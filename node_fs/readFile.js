const { readFile } = require("fs");

// a function that logs the data from a file to the console
function readFileToConsole(filePath) {
  readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log(data.toString());
    }
  });
}

//For use within an http server. Takes in a file path
// and an http response if one is passed in
// or else simply log the data to the console
function readFileWithRes(filePath, response = false) {
  readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      if (response) {
        console.log("response: err 404");
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("<h1>404 Not Found<h1>");
        return;
      }
    }
    if (response) {
      console.log("response: data");
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    } else {
      console.log(data.toString());
    }
  });
}

const testFilePath = "./HelloWorld.txt";

readFileWithRes(testFilePath); //TESTING FIRST WITHOUT PASSING A RES (expecting contents/data "Hello World!")

module.exports = { readFileToConsole, readFileWithRes }; //export for use in other modules/files
