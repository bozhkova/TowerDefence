/// <reference path="vendor/dejavu.js" />
var GameField = dejavu.Class.declare({
    $name: 'GameField',
    $extends: GameObject,
    __width: null,
    __height: null,
    __path: null,
    __minions: null,
    __towers: null,

    initialize: function(x, y, width, height, path) {
        this.$super(x, y);
        this.setWidth(__width);
        this.setHeight(__height);
        this.setPath([]);
        this.setMinions([]);
        this.setTowers([]);
    },

    setWidth: function (width) {
        this.__width = width;
        
        return this;
    },

    getWidth: function () {
        return this.__width;
    },

    setHeight: function (hegiht) {
        this.__height = hegiht;

        return this;
    },

    getHeight: function () {
        return this.__height;
    },

    setPath: function (path) {
        this.__path = path;

        return this;
    },

    getPath: function () {
        this.__path = path;
    },

    setMinions: function (minions) {
        this.__minions = minions;

        return this;
    },

    getMinions: function () {
        return this.__minions;
    },

    setTowers: function (towers) {
        this.__towers;

        return this;
    },

    getTowers: function () {
        return this.__towers;
    }
});