var port = Number(process.env.PORT || 8001);
var express = require('express'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

server.listen(port, function () { console.log("listening at,",  port); });

io.configure( function() { io.set('close timeout', 60*60*2); 
    // 24h time out
 });

io.enable('browser client minification');  // send minified client
io.enable('browser client etag');          // apply etag caching logic based on version number
io.enable('browser client gzip');          // gzip the file
//io.set('log level', 1);                    // reduce logging

io.sockets.on("connection", function(socket) {

    // ************************************************************************************************************************
    // envia y recibe mensajes
    // ************************************************************************************************************************


    socket.on("register_user" , function(data){


        io.sockets.emit("connection_established_"+Config.user_id , connection_status  );


        socket.on("sub_"+data.user_id , function(data){

            io.sockets.emit("sub_"+data.sub,data)
        });


    });// register

});// io socket
