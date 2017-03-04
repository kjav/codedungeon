function GridCell(x, y, walkable, texture, stage) {
    createjs.Shape.call(this);
    this.x = x;
    this.y = y;
    this.walkable = walkable;
    this.texture = texture;
    this.stage = stage;
    this.drawShape();
}

GridCell.prototype = new createjs.Shape();
GridCell.prototype.constructor = GridCell;

GridCell.prototype.setWalkable = function(newWalkable) {
    this.walkable = newWalkable;
};

GridCell.prototype.drawShape = function() {
    var m = new createjs.Matrix2D();
    m.translate(this.x, this.y);
    m.scale(gridSize / this.texture.width, gridSize / this.texture.width);

    this.graphics = new createjs.Graphics()
        .beginBitmapFill(this.texture, "no-repeat", m)
        .drawRect(this.x, this.y, gridSize, gridSize)
        .endFill();
};