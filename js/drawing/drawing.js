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


function nextLevel() {
console.log("in next level");
    init();
    // deactivateEditor("Initialising Editor...");
    readMessage(currentLevel["startingText"], function() {
       $('.gamePanel .gameMessagePanel').delay(600).fadeOut();
       // activateEditor();
    });
}

function init() {
    stage = new createjs.Stage("gameCanvas");
    setLevel(currentLevelNumber);
    imageloader = new createjs.LoadQueue();
    imageloader.loadManifest(manifest);
    imageloader.addEventListener("complete", function() {
      //addPlayer();
    });
    resizeCanvas();
    draw();
}

function draw() {
    setupGrid();
}

function setupGrid() {
    imageloader.addEventListener("complete", function() {
      createGrid();
    });
}

function addPlayer() {
    if (currentState.Key)
      stage.addChild(new PickupGraphic(currentState.Key.x, currentState.Key.y, keySpriteSheet));
    if (currentState.lava) {
      for (var i = 0; i < currentState.lava.length; i++) {
        var l = new LavaGraphic(lavaSpriteSheet);
        l.setGridPos(currentState.lava[i].x, currentState.lava[i].y);
        stage.addChild(l);
      }
    }
    playerGraphic = new PlayerGraphic(boySpriteSheet, "stopDown");
    playerGraphic.setGridPos(currentState["startCoords"].x, currentState["startCoords"].y);
    stage.addChild(playerGraphic);
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
    addPlayer();
      main();
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

$(window).on('resize', function() {
   resizeGrid();
});
