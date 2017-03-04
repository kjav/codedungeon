var girlData = {
    images: ["http://i.imgur.com/Cy7KO7a.png"],
    frames: {width:48, height:48, count:16, regX: 0, regY:0, spacing:0, margin:0},
    animations: {
        walkLeft: {
            frames: [1,5,9,13]
        },
        stopLeft: {
            frames: [1]
        },
        walkRight: {
            frames: [3,7,11,15]
        },
        stopRight: {
            frames: [3]
        },
        walkUp: {
            frames: [2,6,10,14]
        },
        stopUp: {
            frames: [2]
        },
        walkDown: {
            frames: [0,4,8,12]
        },
        stopDown: {
            frames: [0]
        }
    },
    framerate: 31
};

var boyData = {
    images: ["http://i.imgur.com/9bb4qHJ.png"],
    frames: {width:48, height:48, count:16, regX: 0, regY:0, spacing:0, margin:0},
    animations: {
        walkLeft: {
            frames: [1,5,9,13]
        },
        stopLeft: {
            frames: [1]
        },
        walkRight: {
            frames: [3,7,11,15]
        },
        stopRight: {
            frames: [3]
        },
        walkUp: {
            frames: [2,6,10,14]
        },
        stopUp: {
            frames: [2]
        },
        walkDown: {
            frames: [0,4,8,12]
        },
        stopDown: {
            frames: [0]
        }
    },
    framerate: 31
};
var girlSpriteSheet = new createjs.SpriteSheet(girlData);
var boySpriteSheet = new createjs.SpriteSheet(boyData);
var animation = new createjs.Sprite(boySpriteSheet, "stopDown");