var itemsInLevel = []; //so we can easily check when they have been walked on

function PickupGraphic(i, j, spriteSheet, startAnimation) {
    var shape;
    if (startAnimation)
      shape = new createjs.Sprite(spriteSheet, startAnimation);
    else
      shape = new createjs.Sprite(spriteSheet);

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
      shape.scaleX = gridSize / 530;
      shape.scaleY = gridSize / 530;
    };

    shape.tween = function(p_x, p_y, t) {
      shape.x = t * (gridSize * shape.gridX) + (1-t) * p_x;
      shape.y = t * (gridSize * shape.gridY) + (1-t) * p_y;
    }

    shape.setGridPos(i, j);

    shape.resize();

    itemsInLevel.push(shape);

    return shape;
}
