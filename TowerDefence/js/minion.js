/// <reference path="vendor/dejavu.js" />
/// <reference path="game-object.js" />
'use strict';

var Minion = dejavu.AbstractClass.declare({
    $name: 'Minion',
    $extends: GameObject,
    _speed: null,
    _healthPoints: null,
    _reward: null,

    initialize: function (x, y, speed, healthPoints, reward) {
        this.$super(x, y);
        this.__setSpeed(speed);
        this.__setHealthPoints(healthPoints);
        this.__setReward(reward);
    },

    __setSpeed: function (speed) {
        this._speed = speed;
        
        return this;
    },

    getSpeed: function () {
        return this._speed;
    },

    __setHealthPoints: function (healthPoints) {
        this._healthPoints = healthPoints;

        return this;
    },

    getHealthPoints: function () {
        return this._healthPoints;
    },

    __setReward: function (reward) {
        this._reward = reward;

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