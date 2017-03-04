
var levels = {
    LevelOne: {
        map: [
            [6, 4, 4, 4, 4, 4, 4, 4, 4, 7],
            [2, 0, 0, 0, 1, 0, 0, 0, 0, 3],
            [2, 0, 1, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [8, 5, 5, 5, 5, 5, 5, 5, 5, 9]
        ],
       state: {
            GoalCoords: {
                x: 3,
                y: 2
            }
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
       state: {
            GoalCoords: {
                x: 9,
                y: 5
            },
            Key: {
                x: 4,
                y: 9
            }
        },
        checkGoal: function(state) {
            console.log('GoalCoord x:' + state['GoalCoords'].x + ', GoalCoords y: ' + state['GoalCoords'].y);
            return state['GoalCoords'].x == playerGraphic.gridX && state['GoalCoords'].y == playerGraphic.gridY && keyTaken;
        }
    }
};