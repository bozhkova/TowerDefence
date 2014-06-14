/// <reference path="vendor/dejavu.js" />
/// <reference path="tower.js" />
'use strict';

var CannonTower = dejavu.Class.declare({
    $name: 'CannonTower',
    $extends: 'Tower',
    $constants: {
        DAMAGE: 40,
        PRICE: 1200,
        RANGE: 150,
        FIRE_RATE: 1,
        AFFECTED_RADIUS: 4
    },

    initialize: function (x, y) {
        this.$super(x, y, this.$static.DAMAGE, this.$static.PRICE, this.$static.RANGE, this.$static.FIRE_RATE, this.$static.AFFECTED_RADIUS);
    },

    attack: function (position) {
        throw 'This method is not implemented';
    }
});