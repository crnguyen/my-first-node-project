const https = require("http");

https.createServer(function (req, res) {
    res.write ("hello world!");
    res.end();
}).listen(8000);