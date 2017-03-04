function PlayerGraphic(x, y, stage) {
    var shape = new createjs.Shape();
    shape.x = x;
    shape.y = y;
    shape.drawShape = function() {
      this.graphics = new createjs.Graphics()
        .beginFill("DeepSkyBlue")
        .drawRect(
          5 + gridSize * shape.x + gridSize * 0.2,
          5 + gridSize * shape.y + gridSize * 0.2,
          gridSize * 0.6,
          gridSize * 0.6);
    };
    shape.drawShape();
    return shape;
}
