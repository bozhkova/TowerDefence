/// <reference path="vendor/dejavu.js" />
'use strict';

var GameObject = dejavu.AbstractClass.declare({
    $name: 'GameObject',
    _x: null,
    _y: null,

    initialize: function (x, y) {
        this.setX(x);
        this.setY(y);
    },

    setX: function (x) {
        this._x = x;

        return this;
    },
    
    getX: function () {
        return this._x;
    },

    setY: function (y) {
        this._y = y;

        return this;
    },

    getY: function () {
        return this._y;
    }
})