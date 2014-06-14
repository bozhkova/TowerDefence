/// <reference path="vendor/dejavu.js" />
/// <reference path="game-object.js" />
'use strict';

var Minion = dejavu.AbstractClass.declare({
    $name: 'Minion',
    $extends: GameObject,
    __speed: null,
    __healthPoints: null,
    __reward: null,

    initialize: function (x, y, speed, healthPoints, reward) {
        this.$super(x, y);
        this._setSpeed(speed);
        this._setHealthPoints(healthPoints);
        this._setReward(reward);
    },

    _setSpeed: function (speed) {
        this.__speed = speed;
        
        return this;
    },

    getSpeed: function () {
        return this.__speed;
    },

    _setHealthPoints: function (healthPoints) {
        this.__healthPoints = healthPoints;

        return this;
    },

    getHealthPoints: function () {
        return this.__healthPoints;
    },

    _setReward: function (reward) {
        this.__reward = reward;

        return this;
    },

    getReward: function () {
        return this.getReward();
    },

    reduceHealthPoints: function (reducement) {
        if (reducement < 0) {
            throw {
                message: 'Invalid reducement value',
                value: reducement
            }
        }

        if (this.isDead()) {
            return;
        }

        var healthPoints = this.getHealthPoints();
        this.__setHealthPoints(healthPoints - reducement);
    },

    isDead: function () {
        return this.getHealthPoints() <= 0;
    },

    move: function (x, y) {
        this.setX(x);
        this.setY(y);
    }
});