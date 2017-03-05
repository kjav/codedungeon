var girlData = {
    images: ["http://i.imgur.com/Cy7KO7a.png"],
    frames: {width:48, height:48, count:16, regX: 0, regY:0, spacing:0, margin:0},
    animations: {
        walkLeft: {
            frames: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]
        },
        stopLeft: {
            frames: [1]
        },
        walkRight: {
            frames: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        },
        stopRight: {
            frames: [3]
        },
        walkUp: {
            frames: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14]
        },
        stopUp: {
            frames: [2]
        },
        walkDown: {
            frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
        },
        stopDown: {
            frames: [0]
        }
    },
    framerate: 31
};

var wizardData = {
    images: ["http://i.imgur.com/6DiSdeu.png"],
    frames: {width:125, height:125, count:16, regX: 0, regY:0, spacing:0, margin:0},
    animations: {
        idle: {
            frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        },
        jump: {
            frames: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
        },
        die: {
            frames: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
        },
        hurt: {
            frames: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        }
    },
    framerate: 31
};

var boyData = {
    images: ["http://i.imgur.com/9bb4qHJ.png"],
    frames: {width:48, height:48, count:16, regX: 0, regY:0, spacing:0, margin:0},
    animations: {
        walkLeft: {
            frames: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]
        },
        stopLeft: {
            frames: [1]
        },
        walkRight: {
            frames: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        },
        stopRight: {
            frames: [3]
        },
        walkUp: {
            frames: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14]
        },
        stopUp: {
            frames: [2]
        },
        walkDown: {
            frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
        },
        stopDown: {
            frames: [0]
        }
    },
    framerate: 31
};

var explosionData = {
    images: ["http://i.imgur.com/V0BbmO6.png"],
    frames: {width:333, height:333, count:10, regX: 0, regY:0, spacing:0, margin:0},
    animations: {
        explode: {
            frames: [0,1,2,3,4,5,6,7,8,9];
        },
    },
    framerate: 31
};

var keySpriteSheet = new createjs.SpriteSheet({
  images: ["http://i.imgur.com/Au5qMVv.png"],
  frames: { width: 530, height: 530, count: 1, regX: 0, reyY: 0, spacing: 0, margin: 0 }
});

var girlSpriteSheet = new createjs.SpriteSheet(girlData);
var boySpriteSheet = new createjs.SpriteSheet(boyData);
