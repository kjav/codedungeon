var numRows = 10;
var numCols = 10;
var gameHeight  = $('.gamePanel').height();
var gameWidth  = $('.gamePanel').width();
var gridSize = Math.floor(gameHeight < gameWidth ? gameHeight / numCols : gameWidth / numRows);
// var topMa gridSize * numCols);
var playerGraphic;

var grid = [
    [], [], [], [], [],
    [], [], [], [], []
];

var stage, loader; // easeljs variables
var manifest = [
    { src: "http://i.imgur.com/c05eK8H.png", id: "stone" },
    { src: "http://i.imgur.com/sGowEpM.jpg", id: "dirt" }
];

function init() {
    stage = new createjs.Stage("gameCanvas");
    addPlayer();
    main();
    resizeCanvas();
    draw();
}

function draw() {
    setupGrid();
    debugValues();
}

function addPlayer() {
    playerGraphic = new PlayerGraphic(1, 1);
    stage.addChild(playerGraphic);
    // stage.setChildIndex(playerGraphic, stage.getNumChildren()-1);
    stage.update();
}

function setupGrid() {
    loader = new createjs.LoadQueue();
    loader.loadManifest(manifest);
    loader.addEventListener("complete", function() {
      createGrid();
    });
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
            var textureName = getTexture(index);
            var cell = new GridCell(x / 2, y / 2, getWalkable(index), loader.getResult(textureName));
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

function getTexture(index) {
    switch (mapOne[index]) {
        case 0: // dirt
            return "dirt";
            break;
        case 1: // stone
            return "stone";
            break;

    }
}

function getWalkable(index) {
    switch (mapOne[index]) {
        case 0: // dirt
            return true;
            break;
        case 1: // stone
            return false;
            break;
    }
}

function resizeGrid() {
    stage.removeAllChildren();
    resizeCanvas();
    createGrid();
}

function debugValues() {
    console.log("Stage Height: " + gameHeight);
    console.log("Stage Width: " + gameWidth);
    console.log("gridSize: " + gridSize);
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
