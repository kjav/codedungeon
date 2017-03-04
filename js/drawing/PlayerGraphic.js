function PlayerGraphic(x, y, animation) {
    var shape = new createjs.Shape();
    shape.x = x;
    shape.y = y;
    shape.animation = animation;
    
    shape.drawShape = function() {
        var frame = this.animation.spriteSheet.getFrame(this.animation.currentFrame);
        var scale_factor = 4 * gridSize / frame.image.width
        
        var m = new createjs.Matrix2D();
        m.translate(shape.x * gridSize - frame.rect.x, shape.y * gridSize - frame.rect.y);
        m.scale(scale_factor, scale_factor);

        shape.graphics = new createjs.Graphics()
            .beginBitmapFill(frame.image, "no-repeat", m)
            .drawRect(shape.x * gridSize, shape.y * gridSize, gridSize, gridSize)
            .endFill();
    };
    
    shape.drawShapeTween = function(p_x, p_y, t) {
        var frame = this.animation.spriteSheet.getFrame(this.animation.currentFrame);
        var scale_factor = 4 * gridSize / frame.image.width
        
        var m = new createjs.Matrix2D();
        m.translate(((1-t) * p_x + t * shape.x) * gridSize - frame.rect.x,
                    ((1-t) * p_y + t * shape.y) * gridSize - frame.rect.y);
        m.scale(scale_factor, scale_factor);

        shape.graphics = new createjs.Graphics()
            .beginBitmapFill(frame.image, "no-repeat", m)
            .drawRect(((1-t) * p_x + t * shape.x) * gridSize,
                      ((1-t) * p_y + t * shape.y) * gridSize,
                      gridSize, gridSize)
            .endFill();

    };
    
    shape.drawShape();
    return shape;
}
