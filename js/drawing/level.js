
var currentLevelNumber = 0;
var currentLevel;
var currentMap;
var currentState;
var currentGoalCheck;
var levelKey;

function setLevel(levelNumber) {
    switch(levelNumber) {
        case 1:
            currentLevel = levels["LevelOne"];
            break;
        case 2:
            currentLevel = levels["LevelTwo"];
            break;
        case 3:
            currentLevel = levels["LevelThree"];
            break;
        case 4:
            currentLevel = levels["LevelFour"];
            break;

    }
    currentMap = currentLevel["map"];
    currentState = currentLevel["state"];
    currentGoalCheck = currentLevel["checkGoal"];
    if (currentState.Key)
      stage.addChild(new PickupGraphic(currentState.Key.x, currentState.Key.y, keySpriteSheet));
    orientation = currentState.startOrientation;
    switch(orientation) {
      case FACING_NORTH:
        startAnimation = "stopUp";
        break;
      case FACING_EAST:
          startAnimation = "stopEast";
        break;
      case FACING_SOUTH:
        startAnimation = "stopSouth";
        break;
      case FACING_WEST:
        startAnimation = "stopWest";
        break;
    }
}

// setLevel(1);

function levelCompleted() {
    hideNextLevelButton();
    currentLevelNumber++;
    setLevel(currentLevelNumber);
    nextLevel();
}

levelCompleted();


function showNextLevelButton() {
    $('.gameMessagePanel').fadeIn(200);
    readMessage("Well well mortal.. you impress me.", function() {
        $('.nextLevel').addClass('shown').fadeTo(400, 0.9);
    });
}

function hideNextLevelButton() {
    $('.nextLevel').removeClass('shown');
}

$('.nextLevel').on('click', function() {
   levelCompleted();
});

function readMessage(message, customCallback) {
    $(".gameMessage").typed({
        strings: [message],
        contentType: 'html', // or 'text'
        typeSpeed: 25,
        callback: customCallback
    });
}

// createjs.Sound.addEventListener("fileload";
createjs.Sound.registerSound("../../sounds/text-scroll.mp3", "text");

function playTextSound() {
    var instance = createjs.Sound;
    instance.volume = 0.2;
    instance.play("text");  // play using id.  Could also use full source path or event.src.
}
