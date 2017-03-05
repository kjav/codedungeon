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
            frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
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
            frames: [0,1,2,3,4,5,6,7,8,9]
        },
    },
    framerate: 31
};

var keySpriteSheet = new createjs.SpriteSheet({
  images: ["http://i.imgur.com/Au5qMVv.png"],
  frames: { width: 530, height: 530, count: 1, regX: 0, regY: 0, spacing: 0, margin: 0 }
});

var lavaSpriteSheet = new createjs.SpriteSheet({
  images: ["http://i.imgur.com/smyN1i5.png"],
  frames: { width: 128, height: 128, count: 76, regX: 0, regY: 0, spacing: 0, margin: 0 },
  animations: {
    all: {
      frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23, 23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27, 28, 28, 28, 29, 29, 29, 30, 30, 30, 31, 31, 31, 32, 32, 32, 33, 33, 33, 34, 34, 34, 35, 35, 35, 36, 36, 36, 37, 37, 37, 38, 38, 38, 39, 39, 39, 40, 40, 40, 41, 41, 41, 42, 42, 42, 43, 43, 43, 44, 44, 44, 45, 45, 45, 46, 46, 46, 47, 47, 47, 48, 48, 48, 49, 49, 49, 50, 50, 50, 51, 51, 51, 52, 52, 52, 53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 56, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 60, 60, 61, 61, 61, 62, 62, 62, 63, 63, 63, 64, 64, 64, 65, 65, 65, 66, 66, 66, 67, 67, 67, 68, 68, 68, 69, 69, 69, 70, 70, 70, 71, 71, 71, 72, 72, 72, 73, 73, 73, 74, 74, 74, 75, 75, 75]
    }
  }
});

var potionSpriteSheet = new createjs.SpriteSheet({
  images: ["http://i.imgur.com/zGFMzx2.png"],
  frames: { width: 75, height: 75, count: 2, regX: 0, regY: 0, spacing: 0, margin: 0 },
  animations: {
    on: {
      frames: [1]
},
    off: {
      frames: [0]
    }
  }
});

var girlSpriteSheet = new createjs.SpriteSheet(girlData);
var boySpriteSheet = new createjs.SpriteSheet(boyData);
var bossSpriteSheet = new createjs.SpriteSheet(wizardData);
