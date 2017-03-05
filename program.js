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


// Buradan sonrası yeni
var io = require("socket.io").listen(server);

io.sockets.on('connection', function (socket) {

    console.log("User Connected");

    socket.on("disconnect", function () {

        console.log("User Disconnected");
    });
});
