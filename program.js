"use strict";

var http = require("http");

var server = http.createServer(processRequest).listen(1234, "127.0.0.1");

function processRequest(request, response) {

    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.write("Simple HTML Page");

    response.end();

}

var io = require("socket.io").listen(server);

io.sockets.on('connection', function (socket) {

    socket.emit("test", {
        value1: "Ali",
        value2: 49
    });

});
