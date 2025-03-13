const fs = require("fs");

fs.unlink("./HelloWorld.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted!");
});
