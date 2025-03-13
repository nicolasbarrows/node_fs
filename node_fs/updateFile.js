const fs = require("fs");

fs.appendFile(
  "./HelloWorld.txt",
  " It's great to have a flexible file system!",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File updated!");
  }
);
