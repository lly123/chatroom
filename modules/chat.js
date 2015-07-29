/**
 * Created by richard on 7/28/15.
 */
var socket = require('socket.io');
var colour = require('colour');

colour.mode = 'browser';

module.exports = exports = function (server) {
    var io = socket(server);
    var users = {};

    io.sockets.on('connection', function (socket) {
        var userId = socket.id;

        socket.on('join', function (opts) {
            users[userId] = opts;
            socket.join(opts.room);
            socket.broadcast.emit('message', opts.nickName.red + ' has joined.');
        });

        socket.on('message', function (msg) {
            io.to(users[userId].room).emit('message', msg);
        });

        socket.on('change room', function (room) {
            socket.leave(users[userId].room);
            io.to(users[userId].room).emit('message', users[userId].nickName.red + ' has left.');

            users[userId].room = room;
            socket.join(room);
            io.to(room).emit('message', users[userId].nickName.red + ' has joined.');
        });
    });
};