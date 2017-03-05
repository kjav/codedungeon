
var currentLevelNumber = 1;
var currentLevel;
var currentMap;
var currentState;
var currentGoalCheck;
var levelKey;

function setLevel(levelNumber) {
    switch(levelNumber) {
        case 1:
            currentLevel = levels["LevelOne"];
            $('#bossTimer').remove();
            break;
        case 2:
            currentLevel = levels["LevelTwo"];
            $('#bossTimer').remove();
            break;
        case 3:
            currentLevel = levels["LevelThree"];
            battleStarted();
            break;
        case 4:
            currentLevel = levels["LevelFour"];
            break;
        case 99:
            currentLevel = levels["LevelTwoComplete"];
            $('#bossTimer').remove();
            createjs.Sound.stop();
            $('.bossPanel').removeClass('visible');
            break;

    }
    currentMap = currentLevel["map"];
    currentState = currentLevel["state"];
    currentGoalCheck = currentLevel["checkGoal"];
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

$('.previousLevel').on('click', function() {
    currentLevelNumber -= 2;
    levelCompleted();
});

// setLevel(1);

function levelCompleted() {
    hideNextLevelButton();
    $('.levelOverPanel').fadeOut(400, function() {
        $('.levelOverPanel').hide();
    });
    currentLevelNumber++;
    $('.stageNumber').text('Level ' + currentLevelNumber);
    if (currentLevelNumber > 1) {
        $('.previousLevel').addClass('enabled');
    } else {
        $('.previousLevel').removeClass('enabled');
    }
    setLevel(currentLevelNumber);
    if (currentLevelNumber === 3) {
        $('#bossTimer').remove();
        $element = $('<div id="bossTimer"></div>');
        $('.gamePanel').prepend($element);
        $('#bossTimer').off();
        createTimer($element);
        $('.bossPanel').addClass('visible');
        playSound("boss");
        playSound("evilLaugh");
    } else {
        $('#bossTimer').remove();
        createjs.Sound.stop();
        $('.bossPanel').removeClass('visible');
    }
    nextLevel();
}

levelCompleted();

function showLevelEndScreen() {
    if (currentLevelNumber == 99) {
        currentLevelNumber = 2;
    } else if (currentLevelNumber == 3) {
        $('#levelCleared').text('BOSS BATTLE CLEARED!');
        $('#bossTimer').remove();
    } else {
        $('#levelCleared').text('Level ' + currentLevelNumber + ' cleared!');
    }
    $('.levelOverPanel').show().fadeIn(400);
    console.log('TRYING TO PLAY LEVEL WIN');
    playSound("levelWin");
    readOverlayMessage(currentLevel['endingText'], function() {
        $('.nextLevel').addClass('shown').fadeTo(400, 0.9);
    });

}

function hideNextLevelButton() {
    $('.nextLevel').removeClass('shown');
}

$('.nextLevel').on('click', function() {
    createjs.Sound.stop();
    if (currentLevelNumber == 3) {
        showFinalScreen();
    } else {
        levelCompleted();
    }

});

function showFinalScreen() {
    $('.congrats').text('THANK YOU FOR PLAYING!');
    $('#levelCleared').text('PLEASE DONATE $1337')
    $('.nextLevel').hide();
    $('.levelOverPanel').css('background', 'rgba(0, 0, 0, 0.8)');
    createjs.Sound.stop();
    playSound("ending");
    readOverlayMessage("I'll be back.", function() {
        $('.levelOverPanel .speakerImage').attr('src', './img/arnold.png');

    });
}

function readMessage(message, customCallback) {
    $('.gamePanel .gameMessagePanel').show();
    $(".gamePanel .gameMessage").typed({
        strings: [message],
        contentType: 'html', // or 'text'
        typeSpeed: 20,
        callback: customCallback
    });
    playSound("text");
}

function readOverlayMessage(message, customCallback) {
    $(".levelOverPanel .gameMessage").typed({
        strings: [message],
        contentType: 'html', // or 'text'
        typeSpeed: 20,
        callback: customCallback
    });
    playSound("text");
}


