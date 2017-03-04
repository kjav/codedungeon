function GridCell(x, y, walkable, texture) {
    var shape = new createjs.Shape();
    shape.x = x;
    shape.y = y;
    shape.walkable = walkable;
    shape.texture = texture;
    shape.drawShape = function() {
        var m = new createjs.Matrix2D();
        m.translate(this.x, this.y);
        m.scale(gridSize / this.texture.width, gridSize / this.texture.width);

        shape.graphics = new createjs.Graphics()
            .beginBitmapFill(this.texture, "no-repeat", m)
            .drawRect(shape.x, shape.y, gridSize, gridSize)
            .endFill();
    };
    shape.setWalkable = function(newWalkable) {
        this.walkable = newWalkable;
    };

    return shape;
}
