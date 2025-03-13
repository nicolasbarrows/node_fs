const { existsSync, readdir, mkdir } = require("fs");

let dirPath = ".";
let foundDir = existsSync(dirPath);

if (foundDir) {
  console.log("Folder exists!");
  readdir(dirPath, (err, contents) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(contents);
    }
  });
} else {
  mkdir(dirPath, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Folder created!");
  });
}
