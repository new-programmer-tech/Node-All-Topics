const http = require('http');

const server = http.createServer(function (req, res, next) {
    res.end("hello world!");
})


server.listen(3000);