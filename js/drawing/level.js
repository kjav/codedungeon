
var currentLevelNumber = 1;
var currentLevel;
var currentMap;
var currentState;
var currentGoalCheck;

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
}

setLevel(1);

function levelCompleted() {
    hideNextLevelButton();
    currentLevelNumber++;
    setLevel(currentLevelNumber);
    nextLevel();
}

function showNextLevelButton() {
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

readMessage("Puny mortal. How dare you enter my realm. I shall not allow you to leave.");


// createjs.Sound.addEventListener("fileload";
createjs.Sound.registerSound("../../sounds/text-scroll.mp3", "text");

function playTextSound() {
    var instance = createjs.Sound;
    instance.volume = 0.2;
    instance.play("text");  // play using id.  Could also use full source path or event.src.
}
