(function () {
    /// <reference path="enemy.js" />
    'use strict';

    var gameEngine = GameEngine.getInstance();
    gameEngine.run();

    var enemy = new Enemy(16, 0);

})();