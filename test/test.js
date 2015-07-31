/**
 * Created by richard on 7/31/15.
 */
(function () {
    'use strict';

    var EventEmitter = require('events').EventEmitter;
    var util = require('util');

    describe('Test EventEmitter', function () {
        it('should send message', function () {
            var e = new EventEmitter();

            e.on('event', function (o) {
                console.log('Hello!', o);
            });

            e.emit('event', {a: 1});
        });

        it('inheritance', function () {
            var A = function () {
            };
            var B = function () {
            };

            //A.prototype = new B();
            //A.prototype.constructor = A;

            util.inherits(A, B);

            var a1 = new A();

            console.log(a1.constructor === A);
            console.log(a1 instanceof A);
            console.log(a1.constructor === B);
            console.log(a1 instanceof B);
        });


        it('inherits EventEmitter', function () {
            var MyClass = function () {
                this.on('message', function (msg) {
                    console.log('Received message: ', msg);
                });
            };

            util.inherits(MyClass, EventEmitter);

            var o = new MyClass();
            o.emit('message', 'Hello!!!');
        });
    });
})();