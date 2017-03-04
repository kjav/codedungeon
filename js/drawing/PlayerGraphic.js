function PlayerGraphic(x, y, texture) {
    var shape = new createjs.Shape();
    shape.x = x;
    shape.y = y;
    shape.texture = texture;
    console.log(texture);
    
    shape.drawShape = function() {
        var m = new createjs.Matrix2D();
        m.translate(shape.x * gridSize, shape.y * gridSize);
        m.scale(gridSize / this.texture.width, gridSize / this.texture.width);

        shape.graphics = new createjs.Graphics()
            .beginBitmapFill(this.texture, "no-repeat", m)
            .drawRect(this.x * gridSize, shape.y * gridSize, gridSize, gridSize)
            .endFill();
    };
    
    shape.drawShapeTween = function(p_x, p_y, t) {
        var m = new createjs.Matrix2D();
        m.translate(((1-t) * p_x + t * shape.x) * gridSize, ((1-t) * p_y + t * shape.y) * gridSize);
        m.scale(gridSize / this.texture.width, gridSize / this.texture.width);

        shape.graphics = new createjs.Graphics()
            .beginBitmapFill(this.texture, "no-repeat", m)
            .drawRect(((1-t) * p_x + t * shape.x) * gridSize, ((1-t) * p_y + t * shape.y) * gridSize, gridSize, gridSize)
            .endFill();
    };
    
    shape.drawShape();
    return shape;
}
