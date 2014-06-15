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
		if (!path) {
			path = [ 
			{x: 16, y: 0},
			{x: 16, y: 3},
			{x: 8,  y: 3},
			{x: 8,  y: 0},
			{x: 5,  y: 0},
			{x: 5,  y: 2},
			{x: 6,  y: 2},
			{x: 6,  y: 4},
			{x: 5,  y: 4},
			{x: 5,  y: 8},
			{x: 7,  y: 8},	
			{x: 7,  y: 11},
			{x: 16, y: 11},
			{x: 16, y: 6},		
			{x: 11, y: 6},
			{x: 11, y: 15},
			{x: 14, y: 15},	
			{x: 14, y: 18},
			{x: 7,  y: 18},
			{x: 7,  y: 19}			 
			]
		}
        this.setPath(path);
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