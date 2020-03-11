const socketio = require('socket.io');

exports.setupWebSocket = (server) => {
    console.log('OK Socket')

    const io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
        console.log(socket.handshake.query);
    })
}