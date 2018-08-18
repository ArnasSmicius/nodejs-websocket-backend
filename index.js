var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var port = process.env.PORT || 4000
var server = app.listen(port, function() {
    console.log(`listening to requests on port: ${port}`);
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server)

io.on('connection', function(socket) {
    console.log('made socket connection', socket.id)

    socket.on('chat', function(data) {
        console.log(data)
        // io.sockets.emit('chat', data)
        socket.broadcast.emit('chat', data)
    })

});