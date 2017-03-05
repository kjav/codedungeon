function changeTexture(x, y, textureString) {
    grid[x][y].changeTexture(loader.getResult(textureString));
}

function getTexture(x, y) {
    switch (currentMap[x][y]) {
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
        case 10:
            return "wallrightdoor";
            break;
        case 11:
            return "walltopdoor";
            break;
        case 12:
            return "walltopdoorclosed";
            break;
    }
}

function getWalkable(x, y) {
    switch (currentMap[x][y]) {
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
        case 10:
            return true;
            break;
        case 11:
            return true;
            break;
        case 12:
            return false;
            break;
    }
}
