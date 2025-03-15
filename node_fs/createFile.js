const fs = require("fs");

function createFile(filePath) {
  fs.writeFile(filePath, "Hello, World!", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File created!");
  });
}

const testFilePath = "./HelloWorld.txt";
createFile(testFilePath);

module.exports = { createFile };
