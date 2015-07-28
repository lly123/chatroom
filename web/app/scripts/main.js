/*global angular*/
(function (global) {
    'use strict';
    angular.module('chatRoom', [])
        .controller('MainController', ['$scope', function($scope) {
            $scope.roomNames = ['Java', 'Python'];
            $scope.currentRoom = $scope.roomNames[0];
            var socket = io.connect('http://localhost:3000', {query: 'room=' + $scope.currentRoom});

            $scope.say = function () {
                console.log('>>> ', $scope.currentRoom, $scope.nickName, $scope.something);
            }
        }]);
})(window);
