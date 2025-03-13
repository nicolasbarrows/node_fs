const fs = require("fs");

fs.writeFile("./HelloWorld.txt", "Hello, World!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File created!");
});
