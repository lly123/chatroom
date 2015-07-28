/**
 * Created by richard on 7/28/15.
 */
var socket = require('socket.io');

exports.listen = function (server) {
    var io = socket.listen(server);

    io.sockets.on('connection', function (socket) {
        console.log('>>> ', socket.id, socket.handshake);
    });
};