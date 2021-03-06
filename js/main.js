// Javascript goes here
var MOVE_FORWARD = 1;
var MOVE_BACKWARD = 2;
var TURN_RIGHT = 3;
var TURN_LEFT = 4;
var PUSH_OBJECT = 5;
var INTERACT = 6;
var WAIT = 7;
var PICKUP = 8;

var FACING_NORTH = "North";
var FACING_EAST = "East";
var FACING_SOUTH = "South";
var FACING_WEST = "West";

var orientation = FACING_SOUTH;

// Time per graphic in ms
// LOOKS BEST WHEN DIVISIBLE BY 40
var frame_time = 360;

function Person(x, y, graphic) {
  this.moveForward = function() {
    if (currentLevel.movement_locked)
      return;
    switch(orientation) {
      case FACING_NORTH:
        if (grid[graphic.gridX][graphic.gridY - 1].walkable)
        {
          graphic.setGridY(graphic.gridY - 1);
          graphic.gotoAndPlay("walkUp");
        }
        break;
      case FACING_EAST:
        if (grid[graphic.gridX+ 1][graphic.gridY].walkable)
        {
          graphic.setGridX(graphic.gridX + 1);
          graphic.gotoAndPlay("walkRight");
        }
        break;
      case FACING_SOUTH:
        if (grid[graphic.gridX][graphic.gridY + 1].walkable)
        {
          graphic.setGridY(graphic.gridY + 1);
          graphic.gotoAndPlay("walkDown");
        }
        break;
      case FACING_WEST:
        if (grid[graphic.gridX - 1][graphic.gridY].walkable)
        {
          graphic.setGridX(graphic.gridX - 1);
          graphic.gotoAndPlay("walkLeft");
        }
        break;
    }
  };
  this.moveBackward = function() {
    if (currentLevel.movement_locked)
      return;
    switch(orientation) {
      case FACING_NORTH:
        if (grid[graphic.gridX][graphic.gridY + 1].walkable)
        {
          graphic.setGridY(graphic.gridY + 1);
          graphic.y += 1;
          graphic.gotoAndPlay("walkUp");
        }
        break;
      case FACING_EAST:
        if (grid[graphic.gridX - 1][graphic.gridY].walkable)
        {
          graphic.setGridX(graphic.gridX - 1);
          graphic.gotoAndPlay("walkRight");
        }
        break;
      case FACING_SOUTH:
        if (grid[graphic.gridX][graphic.gridY - 1].walkable)
        {
          graphic.setGridY(graphic.gridY - 1);
          graphic.gotoAndPlay("walkDown");
        }
        break;
      case FACING_WEST:
        if (grid[graphic.gridX + 1][graphic.gridY].walkable)
        {
          graphic.setGridX(graphic.gridX + 1);
          graphic.gotoAndPlay("walkLeft");
        }
        break;
    }
  };
  this.turnRight = function() {
    switch(orientation) {
      case FACING_NORTH:
        orientation = FACING_EAST;
        graphic.gotoAndPlay("stopRight");
        break;
      case FACING_EAST:
        orientation = FACING_SOUTH;
        graphic.gotoAndPlay("stopDown");
        break;
      case FACING_SOUTH:
        orientation = FACING_WEST;
        graphic.gotoAndPlay("stopLeft");
        break;
      case FACING_WEST:
        orientation = FACING_NORTH;
          graphic.gotoAndPlay("stopUp");
        break;
    }
  };
  this.turnLeft = function() {
    switch(orientation) {
      case FACING_NORTH:
        orientation = FACING_WEST;
        graphic.gotoAndPlay("stopLeft");
        break;
      case FACING_EAST:
        orientation = FACING_NORTH;
          graphic.gotoAndPlay("stopUp");
        break;
      case FACING_SOUTH:
        orientation = FACING_EAST;
        graphic.gotoAndPlay("stopRight");
        break;
      case FACING_WEST:
        orientation = FACING_SOUTH;
        graphic.gotoAndPlay("stopDown");
        break;
    }
  };
  this.pushObject = function() {
    switch(orientation) {
      case FACING_NORTH:
        //check if tile infront has movable object
        //pushObject.onPush(orientation);
        break;
      case FACING_EAST:
        //check if tile infront has movable object
        //pushObject.onPush(orientation);
        break;
      case FACING_SOUTH:
        //check if tile infront has movable object
        //pushObject.onPush(orientation);
        break;
      case FACING_WEST:
        //check if tile infront has movable object
        //pushObject.onPush(orientation);
        break;
    }
  };

  this.interact = function() {
    switch(orientation) {
      case FACING_NORTH:
        //interact with tile infront
        break;
      case FACING_EAST:
        //interact with tile infront
        break;
      case FACING_SOUTH:
        //interact with tile infront
        break;
      case FACING_WEST:
        //interact with tile infront
        break;
    }
  };

  this.wait = function() {
    switch(orientation) {
      case FACING_NORTH:
        playerGraphic.gotoAndPlay("stopUp");
        break;
      case FACING_EAST:
        playerGraphic.gotoAndPlay("stopRight");
        break;
      case FACING_SOUTH:
        playerGraphic.gotoAndPlay("stopDown");
        break;
      case FACING_WEST:
        playerGraphic.gotoAndPlay("stopLeft");
        break;
    }
  };  
  this.pickUp = function() {
    for(i = 0; i < itemsInLevel.length; i++)
    {
      if ((itemsInLevel[i].gridX == graphic.gridX) && (itemsInLevel[i].gridY == graphic.gridY))
        itemsInLevel[i].taken = true;
        itemsInLevel[i].visibility = false;
        itemsInLevel[i].visible = false;
        grid[currentState.GoalCoords.x][currentState.GoalCoords.y].setWalkable(true);
        grid[currentState.GoalCoords.x][currentState.GoalCoords.y].changeTexture(imageloader.getResult("walltopdoor"));
    }
  };

  this.getState = function() {
    console.log("x Position: " + graphic.x + ", y Position: " + graphic.y + ", Orientation: " + orientation);
  };
}

function pushObject(x, y) {
  var xPos = x;
  var yPos = y;
  
  this.onPush = function(orientation) {
    switch(orientation) {
      case FACING_NORTH:
        yPos -= 1;
        break;
      case FACING_EAST:
        xPos += 1;
        break;
      case FACING_SOUTH:
        yPos += 1;
        break;
      case FACING_WEST:
        xPos -= 1;
        break;
    }
  }
  this.getState = function() {
    console.log("x Position: " + graphic.x + ", y Position: " + graphic.y);
  }
}

function Commands(p) {
  var commands;
  var p = p;
 
  this.moveForward = function() {
     commands.push(MOVE_FORWARD);
  };
  this.moveBackward = function() {
     commands.push(MOVE_BACKWARD);
  };
  this.turnRight = function() {
     commands.push(TURN_RIGHT);
  };
  this.turnLeft = function() {
     commands.push(TURN_LEFT);
  };
  this.pushObject = function() {
     commands.push(PUSH_OBJECT);
  };
  this.interact = function() {
     commands.push(INTERACT);
  };
  this.wait = function() {
     commands.push(WAIT);
  };  
  this.pickUp = function() {
     commands.push(PICKUP);
  };
  this.execute = function(that) {
    console.log('Executing. c: ', commands);
    if (commands.length == 0) {
      console.log("orientation" + p);
      p.wait();
      p.getState();

      if (currentGoalCheck(currentState)) {
        showLevelEndScreen();
        console.log('YAAAAAASSSHHH');
      } else {
        console.log('NOOOOOOOOOOPE');
      }


      activateEditor();
      return;
    }
    
    p.getState();

    var prev_x = playerGraphic.x;
    var prev_y = playerGraphic.y;

    var command = commands.shift();
    switch(command)
    {
      case MOVE_FORWARD:
        p.moveForward();
        break;
      case MOVE_BACKWARD:
        p.moveBackward();
        break;
      case TURN_LEFT:
        p.turnLeft();
        break;
      case TURN_RIGHT:
        p.turnRight();
        break;
      case PUSH_OBJECT:
        p.pushObject();
        break;
      case INTERACT:
        p.interact();
        break;
      case WAIT:
        p.wait();
        break;
      case PICKUP:
        p.pickUp();
        playSound("pickup");
        break;
    }

    playerGraphic.tween(prev_x, prev_y, 0);

    var startTime = window.performance.now();
    var render_interval = setInterval(function() {
      var time = (window.performance.now() - startTime) / frame_time;
      playerGraphic.tween(prev_x, prev_y, time);
    }, 16);

    var boundExecute = this.execute.bind(this);

    setTimeout(function() {
      clearInterval(render_interval);
      playerGraphic.tween(prev_x, prev_y, 1);
      boundExecute()
    }, frame_time);
  };

  this.reset = function() {
    commands = [];
  };

  this.reset();
}

function render() {
  stage.update();

  window.requestAnimationFrame(render);
}
