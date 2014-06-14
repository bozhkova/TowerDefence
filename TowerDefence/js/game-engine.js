/// <reference path="vendor/dejavu.js" />
var GameEngine = dejavu.Class.declare({
    $name: 'GameEngine',
    __initialize: function () {
        console.log('I am a new instance');
    },

    run: function () {
        console.log('running');
    },

    $statics: {
        __instance: null,

        getInstance: function () {
            if (this.$static.__instance == null) {
                this.$static.__instance = new GameEngine();
            }

            return this.$static.__instance;
        }
    }
})