# Node.js File System Exercise

## Getting Started

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: git clone <repo_name>
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises

## Exercise

### Steps

- Create a new project folder called node_fs COMPLETE
- Inside of node_fs, create the 4 following js files:
  - createFile.js COMPLETE
  - readFile.js COMPLETE
  - updateFile.js COMPLETE
  - deleteFile.js COMPLETE
- Inside of createFile.js:
  - Require the fs module COMPLETE
  - Implement the fs.writeFile() function, creating a txt file called HelloWorld.txt, with Hello, World! inside COMPLETE
  - Use the async version COMPLETE
- Run node createFile.js to create the file COMPLETE
- Inside of readFile.js:
  - Require the fs module COMPLETE
  - Implement the fs.readFile() COMPLETE
  - You can either read the contents of the HelloWorld.txt file, or any other file you create in your project COMPLETE
  - Run node readFile.js to read the file to the console COMPLETE
- Inside of updateFile.js COMPLETE
  - Require the fs module COMPLETE
  - Using the appendFile() function, append some text to the end of your HelloWorld.txt COMPLETE
  - Run node update.js COMPLETE
- Inside of deleteFile.js
  - Require the fs module COMPLETE
  - Implement the fs.unlink() COMPLETE
  - Run node deleteFile.js COMPLETE

### BONUS

#### Part 1:

- Create a server that...
  - uses the http and fs modules
  - sends an html page back to the client upon request.
- You must have at minimum two html pages with corresponding routes, and a 404 not found page.

#### Part 2:

- Create a custom logger for accounting for requests to your server. Each time a request event is emitted by your server, send the appropriate html file back, but also log the following information to a file: Request method, url, response status code, and timestamp
- The timestamp can be any format you like, but it a least should show the time of day that the request was made
