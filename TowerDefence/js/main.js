(function () {
    /// <reference path="peasant.js" />
    'use strict';

    var gameEngine = GameEngine.getInstance();
    gameEngine.run();

    var peasant = new Peasant(5, 5);

})();