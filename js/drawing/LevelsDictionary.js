
var levels = {
    LevelOne: {
        map: [
            [6, 4, 4, 4, 4, 4, 4, 4, 4, 7],
            [2, 0, 0, 0, 1, 0, 0, 0, 0, 3],
            [2, 0, 1, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 10],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [8, 5, 5, 5, 5, 5, 5, 5, 5, 9]
        ],
        startingText: "Puny mortal. How dare you enter my realm. I shall not allow you to leave.",
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
            [6, 4, 4, 4, 4, 4, 4, 4, 4, 7],
            [2, 0, 0, 0, 1, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 1, 0, 1, 0, 3],
            [2, 1, 1, 1, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 1, 0, 3],
            [2, 1, 1, 1, 0, 1, 0, 1, 0, 3],
            [2, 0, 0, 0, 0, 1, 0, 1, 0, 3],
            [2, 1, 0, 1, 1, 1, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 1, 0, 0, 0, 3],
            [8, 5, 5, 5, 5, 5, 5, 5, 5, 9]
        ],
        startingText: "TEST LEVEL 2 TEXT.",
        state: {
            GoalCoords: {
                x: 9,
                y: 5
            },
           startCoords: {
               x: 1,
               y: 4
           },
            Key: {
                x: 4,
                y: 9
            },
           startOrientation: FACING_EAST
        },
        checkGoal: function(state) {
            console.log('GoalCoord x:' + state['GoalCoords'].x + ', GoalCoords y: ' + state['GoalCoords'].y);
            return state['GoalCoords'].x == playerGraphic.gridX && state['GoalCoords'].y == playerGraphic.gridY && keyTaken;
        }
    }
};
