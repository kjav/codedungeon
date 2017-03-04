function GridCell(x, y, walkable, texture, stage) {
    console.log('Creating Grid Cell: ' + x + ', ' + y);
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

GridCell.prototype.isWalkable = function() {
    return this.walkable;
};

GridCell.prototype.setWalkable = function(newWalkable) {
    this.walkable = newWalkable;
};

GridCell.prototype.drawShape = function() {
    console.log('Drawing shape at: ' + this.x + ', ' + this.y);
    this.graphics = new createjs.Graphics()
        .beginFill("#00ff00")
        .drawRect(this.x, this.y, gridSize, gridSize)
        .endFill();
};