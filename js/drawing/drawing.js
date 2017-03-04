var numRows = 10;
var numCols = 10;
var gameHeight  = $('.gamePanel').height();
var gameWidth  = $('.gamePanel').width();
var gridSize = Math.floor(gameHeight < gameWidth ? gameHeight / numCols : gameWidth / numRows);
var playerGraphic;
var grid = [
    [], [], [], [], [],
    [], [], [], [], []
];

var stage; // MAIN STAGE

function init() {
    stage = new createjs.Stage("gameCanvas");
    imageloader = new createjs.LoadQueue();
    imageloader.loadManifest(manifest);
    imageloader.addEventListener("complete", function() {
    addPlayer();
      main();
    });
    resizeCanvas();
    draw();
}

function draw() {
    setupGrid();
    debugValues();
}

function setupGrid() {
    imageloader.addEventListener("complete", function() {
      createGrid();
    });
}

function addPlayer() {
  console.log('#########', animation);
      playerGraphic = new PlayerGraphic(1, 1, animation);
      stage.addChild(playerGraphic);
      // stage.setChildIndex(playerGraphic, stage.getNumChildren()-1);
      stage.update();
}
function createGrid() {
    grid = [
        [], [], [], [], [],
        [], [], [], [], []
    ];
    var index = 0;
    var x = 0;
    var y = 0;
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < numCols; j++) {
            var cell = new GridCell(x / 2, y / 2, getWalkable(i ,j), imageloader.getResult(getTexture(i, j)));
            // console.log(cell);
            grid[j].push(cell);
            cell.drawShape();
            x += gridSize;
            index++;
            stage.addChild(cell);
        }
        y += gridSize;
        x = 0;
    }
    stage.addChild(playerGraphic);
    playerGraphic.drawShape();
    stage.update();
    //addPlayer();
}

function resizeGrid() {
    stage.removeAllChildren();
    resizeCanvas();
    createGrid();
}

function resizeCanvas() {
    gameHeight = $('.gamePanel').height();
    gameWidth = $('.gamePanel').width();
    gridSize = Math.floor(gameHeight < gameWidth ? gameHeight / numCols : gameWidth / numRows);
    stage.canvas.height  = gridSize * 10;
    stage.canvas.width = gridSize * 10;
}

init();

$(window).on('resize', function() {
   resizeGrid();
});
