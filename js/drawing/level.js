
var currentLevel;
var currentMap;
var currentState;

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
}

setLevel(1);