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
            socket.broadcast.emit('message', 'User ' + opts.nickName.red + ' has joined.');
            console.log(opts.nickName + ' has joined.');
        });
    });
};