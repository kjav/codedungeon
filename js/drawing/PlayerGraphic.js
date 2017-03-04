function PlayerGraphic(x, y, stage) {
    createjs.Shape.call(this);
    this.x = x;
    this.y = y;
    this.stage = stage;
    this.drawShape();
}

PlayerGraphic.prototype = new createjs.Shape();
PlayerGraphic.prototype.constructor = PlayerGraphic;

PlayerGraphic.prototype.drawShape = function() {
    this.graphics = new createjs.Graphics()
        .beginFill("DeepSkyBlue")
        .drawRect(5 + gridSize * 5 + gridSize * 0.2, 5 + gridSize * 1 + gridSize * 0.2, gridSize * 0.6, gridSize * 0.6);
};