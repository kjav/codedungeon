
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
                x: 5,
                y: 5
            }
        },
        checkGoal: function(state) {
            return state[GoalCoords].x == playerGraphic.x && state[GoalCoords].x == playerGraphic.y;
        }
    }
};