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

var stage, loader; // easeljs variables
var manifest = [
    { src: "http://i.imgur.com/c05eK8H.png", id: "stone" },
    { src: "http://i.imgur.com/sGowEpM.jpg", id: "grass" },
    { src: "http://i.imgur.com/J7Nu1qA.png", id: "wallleft" },
    { src: "http://i.imgur.com/5MenRvj.png", id: "wallright" },
    { src: "http://i.imgur.com/IbzT8H9.png", id: "walltop" },
    { src: "http://i.imgur.com/AdOTDZv.png", id: "wallbottom" },
    { src: "http://i.imgur.com/dm8gm0l.png", id: "walltopleft" },
    { src: "http://i.imgur.com/jjsdNkc.png", id: "walltopright" },
    { src: "http://i.imgur.com/chp4BDL.png", id: "wallbottomleft" },
    { src: "http://i.imgur.com/HZYuTED.png", id: "wallbottomright" },
    { src: "http://i.imgur.com/qPr1A4l.png", id: "girlfront" }
];

function init() {
    stage = new createjs.Stage("gameCanvas");
    loader = new createjs.LoadQueue();
    loader.loadManifest(manifest);
    loader.addEventListener("complete", function() {
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
    loader.addEventListener("complete", function() {
      createGrid();
    });
}

function addPlayer() {
      playerGraphic = new PlayerGraphic(1, 1, loader.getResult("girlfront"));
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
            var cell = new GridCell(x / 2, y / 2, getWalkable(i ,j), loader.getResult(getTexture(i, j)));
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

function changeTexture(x, y, textureString) {
    grid[x][y].changeTexture(loader.getResult(textureString));
    stage.update();
}

function getTexture(x, y) {
    switch (mapOne[x][y]) {
        case 0: // grass
            return "grass";
            break;
        case 1: // stone
            return "stone";
            break;
        case 2: // wallleft
            return "wallleft";
            break;
        case 3: // wallright
            return "wallright";
            break;
        case 4: // walltop
            return "walltop";
            break;
        case 5: // wallbottom
            return "wallbottom";
            break;
        case 6: // walltopleft
            return "walltopleft";
            break;
        case 7: // walltopright
            return "walltopright";
            break;
        case 8: // wallbottomleft
            return "wallbottomleft";
            break;
        case 9: // wallbottomright
            return "wallbottomright";
            break;

    }
}

function getWalkable(x, y) {
    switch (mapOne[x][y]) {
        case 0: // grass
            return true;
            break;
        case 1: // stone
            return false;
            break;
        case 2: // wallleft
            return false;
            break;
        case 3: // wallright
            return false;
            break;
        case 4: // walltop
            return false;
            break;
        case 5: // wallbottom
            return false;
            break;
        case 6: // walltopleft
            return false;
            break;
        case 7: // walltopright
            return false;
            break;
        case 8: // wallbottomleft
            return false;
            break;
        case 9: // wallbottomright
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
