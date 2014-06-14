/// <reference path="vendor/dejavu.js" />
'use strict';

var GameObject = dejavu.AbstractClass.declare({
    $name: 'GameObject',
    __x: null,
    __y: null,

    initialize: function (x, y) {
        this.setX(x);
        this.setY(y);
    },

    setX: function (x) {
        this.__x = x;

        return this;
    },
    
    getX: function () {
        return this.__x;
    },

    setY: function (y) {
        this.__y = y;

        return this;
    },

    getY: function () {
        return this.__y;
    }
})