function PotionGraphic(spriteSheet) {
console.log("BAH " + spriteSheet);
    var shape = new createjs.Sprite(spriteSheet, "off");
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
      shape.scaleX = gridSize / 90;
      shape.scaleY = gridSize / 90;
    };

    shape.changeAnimation = function(id) {
      shape.gotoAndPlay(id);
    };

    shape.resize();

    return shape;
}
