/// <reference path="vendor/dejavu.js" />
/// <reference path="tower.js" />
'use strict';

var FlameTower = dejavu.Class.declare({
    $name: 'FlameTower',
    $extends: Tower,
    $constants: {
        DAMAGE: 150,
        PRICE: 15,
        RANGE: 5,
        FIRE_RATE: 150,
        AFFECTED_RADIUS: 4
    },

    initialize: function (x, y) {
        this.$super(x, y, this.$static.DAMAGE, this.$static.PRICE, this.$static.RANGE, this.$static.FIRE_RATE, this.$static.AFFECTED_RADIUS);
    },

    attack: function (position) {
        throw 'This method is not implemented';
    }
})