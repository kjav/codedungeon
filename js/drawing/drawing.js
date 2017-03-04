var numRows = 10;
var numCols = 10;
var gameHeight  = $('.gamePanel').height();
var gameWidth  = $('.gamePanel').width();
var margin = 10;
var gridSize = gameHeight < gameWidth ? (gameHeight - margin) / numCols : (gameWidth - margin) / numRows;
var grid = [numRows][numCols];

var stage, loader; // easeljs variables
var manifest = [
    {src: "http://3.bp.blogspot.com/-Qs0ZbaSy4KM/T6AuMiorc6I/AAAAAAAABOc/RpA3dZGicC8/s1600/minecraft_dirt.jpg", id: "dirt"}
];

function init() {
    stage = new createjs.Stage("gameCanvas");
    resizeCanvas();
    draw();
}

function draw() {
    setupGrid();
    debugValues();
}

function setupGrid() {
    loader = new createjs.LoadQueue();
    loader.loadManifest(manifest);
    loader.addEventListener("complete", function() {
      createGrid();
    });
}

function createGrid() {
    var x = margin / 2;
    var y = margin / 2;
    console.log('GRID SIZE HERE IS: ' + gridSize);
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < numCols; j++) {
            var cell = new GridCell(x / 2, y / 2, true, loader.getResult('dirt'), stage);
            // grid[i][j].push(cell);
            x += gridSize;
            stage.addChild(cell);
        }
        y += gridSize;
        x = margin / 2;
    }
    stage.update();
}


function resizeGrid() {
    stage.removeAllChildren();
    resizeCanvas();
    createGrid();
    stage.update();
}

function debugValues() {
    console.log("Stage Height: " + (gameHeight - margin));
    console.log("Stage Width: " + (gameWidth - margin));
    console.log("gridSize: " + gridSize);
}

function resizeCanvas() {
    gameHeight = $('.gamePanel').height();
    gameWidth = $('.gamePanel').width();
    gridSize = gameHeight < gameWidth ? (gameHeight - margin) / numCols : (gameWidth - margin) / numRows;
    stage.canvas.height  = gameHeight < gameWidth ? gameHeight : gameWidth;
    stage.canvas.width = gameHeight < gameWidth ? gameHeight : gameWidth;
}

init();

$(window).on('resize', function() {
   console.log('woooohh');
   resizeGrid();
});
