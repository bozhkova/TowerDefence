/// <reference path="vendor/dejavu.js" />
'use strict';

var Tower = dejavu.AbstractClass.declare({
    $name: 'Tower',
    $extends: GameObject,
    _rangeRadius: null,
    _damagе: null,
    _price: null,
    _range: null,
    _fireRate: null,
    _affectedRadius: null,

    initialize: function (x, y, damage, price, range, fireRate, affectedRadius) {
        this.$super(x, y);
        this.__setDamage(damage);
        this.__setPrice(price);
        this.__setRange(range);
        this.__setFireRate(fireRate);
        this.__setAffectedRadius(affectedRadius);
    },

    __setDamage: function (damage) {
        this._damagе = damage;

        return this;
    },

    getDamage: function () {
        return this._damagе
    },

    __setPrice: function (price) {
        this._price = price;

        return this;
    },

    getPrice: function () {
        return this._price;
    },

    __setRange: function (range) {
        this._range = range;

        return this;
    },

    getRange: function () {
        return this._range;
    },

    __setFireRate: function (fireRate) {
        this._fireRate = fireRate;

        return this;
    },

    getFireRate: function () {
        return this._fireRate;
    },

    __setAffectedRadius: function (affectedRadius) {
        this._affectedRadius = affectedRadius;

        return this;
    },

    getAffectedRadius: function () {
        return this._affectedRadius;
    },

    $abstracts: {
        attack: function() {}
    }
});