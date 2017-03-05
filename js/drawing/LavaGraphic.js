function LavaGraphic(spriteSheet) {
    var shape = new createjs.Sprite(spriteSheet, "all");
    shape.x = 0;
    shape.y = 0;
    shape.gridX = 0;
    shape.gridY = 0;
    shape.setGridPos = function(i, j) {
      shape.setGridX(i);
      shape.setGridY(j);
    };
    shape.setGridX = function(i) {
      shape.gridX = i;
      shape.x = i * gridSize;
    };
    shape.setGridY = function(j) {
      shape.gridY = j;
      shape.y = j * gridSize;
    };

    shape.resize = function() {
      shape.scaleX = gridSize / 128;
      shape.scaleY = gridSize / 128;
    };

    shape.resize();

    return shape;
}
