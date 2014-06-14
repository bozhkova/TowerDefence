/// <reference path="minion.js" />
'use strict';

var Peasant = dejavu.Class.declare({
    $name: 'Peasant',
    $extends: Minion,
    $constants: {
        SPEED: 5,
        HEALTH_POINTS: 100,
        REWARD: 300,
    },

    initialize: function (x, y) {
        this.$super(x, y, this.$static.SPEED, this.$static.HEALTH_POINTS, this.$static.REWARD);
    }
});