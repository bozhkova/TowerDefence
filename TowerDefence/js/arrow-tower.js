/// <reference path="vendor/dejavu.js" />
/// <reference path="tower.js" />
'use strict';

var ArrowTower = dejavu.Class.declare({
    $name: 'ArrowTower',
    $extends: Tower,
    $constants: {
        DAMAGE: 20,
        PRICE: 1000,
        RANGE: 100,
        FIRE_RATE: 15,
        AFFECTED_RADIUS: 1
    },

    initialize: function (x, y) {
        this.$super(x, y, this.$static.DAMAGE, this.$static.PRICE, this.$static.RANGE, this.$static.FIRE_RATE, this.$static.AFFECTED_RADIUS);
    },

    attack: function (position) {
        throw 'This method is not implemented';
    }
})