var n_guesses = 0;
var potion_answer = 9;

function reset_potions() {
  n_guesses = 0;
}

function potion(number, index) {
  this.getNumber = function() {
    n_guesses++;

    // Give colour to index'th potion
    // something like this:
    //currentState.potions[index].changeTexture(loader....);

    return number;
  };
}

var potions = [
  // value, index
  new potion(1, 0),
  new potion(4, 1),
  new potion(9, 2),
  new potion(16, 3),
  new potion(31, 4),
  new potion(46, 5),
  new potion(99, 6),
  new potion(103, 7)
];
