# Node Practice
## Node related things to run
- brew update = will update brew
- brew install node = will install node
- brew upgrade node = will upgrade node to current version if already installed

### Installing node package and initializing a project
- cd into folder you want the package to be in
- run npm init in terminal
- package.json file should pop up in the folder

- console.log ("hello world") in index.js
- In terminal, type "node index.js"

"hello world" should pop up in terminal

### HTTP core module
```node
const https = require("http");

https.createServer(function (req, res) {
    res.write ("hello world!");
    res.end();
}).listen(8000);
```

### Fix date formatting in Node - install package
- type "npm i moment" in terminal
