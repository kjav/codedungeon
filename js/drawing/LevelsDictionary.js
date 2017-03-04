
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
    }
};