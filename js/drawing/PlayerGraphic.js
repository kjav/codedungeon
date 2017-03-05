function PlayerGraphic(spriteSheet, startAnimation) {
    var shape = new createjs.Sprite(spriteSheet, startAnimation);
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
      shape.scaleX = gridSize / 48;
      shape.scaleY = gridSize / 48;
    };

    shape.tween = function(p_x, p_y, t) {
      shape.x = t * (gridSize * shape.gridX) + (1-t) * p_x;
      shape.y = t * (gridSize * shape.gridY) + (1-t) * p_y;
    }

    shape.changeToIdle = function() {
      shape.gotoAndPlay("idle");
    };
    shape.changeToJump = function() {
      shape.gotoAndPlay("jump");
    };
    shape.changeToDying = function() {
      shape.gotoAndPlay("hurt");
    };
    shape.changeToDead = function() {
      shape.gotoAndPlay("die");
    };

    shape.resize();

    return shape;
}
