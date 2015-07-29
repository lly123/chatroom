/*global angular*/
(function (global) {
    'use strict';
    angular.module('chatRoom', [])
        .controller('MainController', ['$scope', '$sce', function ($scope, $sce) {
            $scope.roomNames = ['Java', 'Python'];
            $scope.currentRoom = $scope.roomNames[0];
            $scope.nickName = 'User' + Math.floor((Math.random() * 1000000) + 1);

            var socket = io.connect('http://localhost:3000');

            socket.on('message', function (msg) {
                console.log('Got message: ' + msg);
                $scope.content = $sce.trustAsHtml(($scope.content || '') + msg + '<br>');
                $scope.$apply();
            });

            socket.emit('join', {
                nickName: $scope.nickName,
                room: $scope.currentRoom
            });

            $scope.say = function () {
                console.log('>>> ', $scope.currentRoom, $scope.nickName, $scope.something);
            }
        }]);
})(window);
