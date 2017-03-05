
var levels = {
    LevelOne: {
        map: [
            [6, 4, 4, 4, 4, 4, 4, 4, 4, 7],
            [2, 0, 1, 0, 0, 1, 0, 0, 1, 3],
            [2, 0, 0, 1, 0, 0, 0, 1, 0, 3],
            [2, 1, 0, 0, 1, 0, 1, 0, 0, 3],
            [2, 0, 1, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 1, 0, 0, 0, 0, 0, 0, 10],
            [2, 1, 0, 0, 1, 0, 1, 0, 0, 3],
            [2, 0, 0, 1, 0, 0, 0, 1, 0, 3],
            [2, 0, 1, 0, 0, 1, 0, 0, 1, 3],
            [8, 5, 5, 5, 5, 5, 5, 5, 5, 9]
        ],
        startingText: "Puny mortal. How dare you enter my realm. I shall not allow you to leave.",
        endingText: "Well well mortal.. you impress me.",
       state: {
            GoalCoords: {
                x: 9,
                y: 5
            },
           startCoords: {
                x: 5,
                y: 5
           },
           startOrientation: FACING_SOUTH
        },
        checkGoal: function(state) {
            console.log('GoalCoord x:' + state['GoalCoords'].x + ', GoalCoords y: ' + state['GoalCoords'].y);
            return state['GoalCoords'].x == playerGraphic.gridX && state['GoalCoords'].y == playerGraphic.gridY;
        }
    },
    LevelTwo: {
        map: [
            [6, 4, 4, 4, 4, 4, 12, 4, 4, 7],
            [2, 0, 0, 0, 1, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 1, 0, 1, 0, 3],
            [2, 1, 1, 1, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 1, 0, 3],
            [2, 1, 1, 1, 0, 1, 0, 1, 0, 3],
            [2, 0, 0, 0, 0, 1, 0, 1, 0, 3],
            [2, 1, 0, 1, 1, 1, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [8, 5, 5, 5, 5, 5, 5, 5, 5, 9]
        ],
        startingText: "TEST LEVEL 2 TEXT.",
        endingText: "u gon die now.",
        state: {
            GoalCoords: {
                x: 6,
                y: 0
            },
           startCoords: {
               x: 1,
               y: 4
           },
           Key: {
               x: 4,
               y: 8
           },
           startOrientation: FACING_EAST
        },
        checkGoal: function(state) {
            console.log('GoalCoord x:' + state['GoalCoords'].x + ', GoalCoords y: ' + state['GoalCoords'].y);
            return state['GoalCoords'].x == playerGraphic.gridX && state['GoalCoords'].y == playerGraphic.gridY && ((itemsInLevel.length > 0) ? itemsInLevel[0].taken : true);
        }
    },
    LevelTwoComplete: {
        map: [
            [6, 4, 4, 4, 4, 4, 11, 4, 4, 7],
            [2, 0, 0, 0, 1, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 1, 0, 1, 0, 3],
            [2, 1, 1, 1, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 1, 0, 3],
            [2, 1, 1, 1, 0, 1, 0, 1, 0, 3],
            [2, 0, 0, 0, 0, 1, 0, 1, 0, 3],
            [2, 1, 0, 1, 1, 1, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [8, 5, 5, 5, 5, 5, 5, 5, 5, 9]
        ],
        startingText: "TEST LEVEL 2 TEXT.",
        endingText: "u gon die now.",
        state: {
            GoalCoords: {
                x: 6,
                y: 0
            },
            startCoords: {
                x: 6,
                y: 1
            },
            startOrientation: FACING_NORTH
        },
        checkGoal: function(state) {
            return state['GoalCoords'].x == playerGraphic.gridX && state['GoalCoords'].y == playerGraphic.gridY;
        }
    },

    LevelThree: {
        map: [
            [6, 4, 4, 4, 4, 4, 4, 4, 4, 7],
            [2, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 1, 1, 1, 0, 0, 1, 1, 1, 3],
            [2, 1, 1, 1, 0, 0, 1, 1, 1, 3],
            [2, 1, 1, 1, 0, 0, 1, 1, 1, 3],
            [8, 5, 5, 5, 0, 0, 5, 5, 5, 9]
        ],
        startingText: "OH! SO YOU'VE COME TO CHALLENGE ME!?",
        endingText: "*cough* YOU HAVEN'T SEEN THE LAST OF ME!.",
        state: {
            GoalCoords: {
                x: 0,
                y: 0
            },
           startCoords: {
               x: 5,
               y: 8
           },
           boss: {
               x: 3,
               y: 1
           },
           lava: [
             { x: 0, y: 0 },
             { x: 1, y: 0 },
             { x: 2, y: 0 },
             { x: 3, y: 0 },
             { x: 4, y: 0 },
             { x: 5, y: 0 },
             { x: 6, y: 0 },
             { x: 7, y: 0 },
             { x: 8, y: 0 },
             { x: 9, y: 0 },
             { x: 0, y: 9 },
             { x: 1, y: 9 },
             { x: 2, y: 9 },
             { x: 3, y: 9 },
             { x: 6, y: 9 },
             { x: 7, y: 9 },
             { x: 8, y: 9 },
             { x: 9, y: 9 },
             { x: 0, y: 1 },
             { x: 0, y: 2 },
             { x: 0, y: 3 },
             { x: 0, y: 4 },
             { x: 0, y: 5 },
             { x: 0, y: 6 },
             { x: 0, y: 7 },
             { x: 0, y: 8 },
             { x: 9, y: 1 },
             { x: 9, y: 2 },
             { x: 9, y: 3 },
             { x: 9, y: 4 },
             { x: 9, y: 5 },
             { x: 9, y: 6 },
             { x: 9, y: 7 },
             { x: 9, y: 8 },
             { x: 1, y: 1 },
             { x: 2, y: 1 },
             { x: 3, y: 1 },
             { x: 4, y: 1 },
             { x: 5, y: 1 },
             { x: 6, y: 1 },
             { x: 7, y: 1 },
             { x: 8, y: 1 },
             { x: 1, y: 6 },
             { x: 2, y: 6 },
             { x: 3, y: 6 },
             { x: 6, y: 6 },
             { x: 7, y: 6 },
             { x: 8, y: 6 },
             { x: 1, y: 7 },
             { x: 2, y: 7 },
             { x: 3, y: 7 },
             { x: 6, y: 7 },
             { x: 7, y: 7 },
             { x: 8, y: 7 },
             { x: 1, y: 8 },
             { x: 2, y: 8 },
             { x: 3, y: 8 },
             { x: 6, y: 8 },
             { x: 7, y: 8 },
             { x: 8, y: 8 }
           ],
           potions: [
             { x: 1, y: 4 },
             { x: 2, y: 4 },
             { x: 3, y: 4 },
             { x: 4, y: 4 },
             { x: 5, y: 4 },
             { x: 6, y: 4 },
             { x: 7, y: 4 },
             { x: 8, y: 4 }
           ],
           startOrientation: FACING_NORTH
        },
        checkGoal: function(state) {
            return false;
        }
    }

};
