// Javascript goes here
var MOVE_FORWARD = 1;
var MOVE_BACKWARD = 2;
var TURN_RIGHT = 3;
var TURN_LEFT = 4;
var PUSH_OBJECT = 5;
var INTERACT = 6;
var WAIT = 7;

var FACING_NORTH = "North";
var FACING_EAST = "East";
var FACING_SOUTH = "South";
var FACING_WEST = "West";

// Time per graphic in ms
// LOOKS BEST WHEN DIVISIBLE BY 40
var frame_time = 360;

function Person(x, y, graphic) {
  var orientation = FACING_SOUTH;
  
  this.moveForward = function() {
    console.log('here: ', graphic, playerGraphic);
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
        console.log('here 2');
        if (grid[graphic.gridX][graphic.gridY + 1].walkable)
        {
          console.log('here 3: ', graphic.gridY);
          graphic.setGridY(graphic.gridY + 1);
          graphic.gotoAndPlay("walkDown");
          console.log('here 4: ', graphic.gridY);
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
    //if tile blocked logic here
    //else
    switch(orientation) {
      case FACING_NORTH:
        if (grid[graphic.gridX][graphic.gridY + 1].walkable)
        {
          graphic.setGridY(graphic.gridY + 1);
          graphic.y += 1;
          graphic.gotoAndPlay("walkDown");
        }
        break;
      case FACING_EAST:
        if (grid[graphic.gridX - 1][graphic.gridY].walkable)
        {
          graphic.setGridX(graphic.gridX - 1);
          graphic.gotoAndPlay("walkLeft");
        }
        break;
      case FACING_SOUTH:
        if (grid[graphic.gridX][graphic.gridY - 1].walkable)
        {
          graphic.setGridY(graphic.gridY - 1);
          graphic.gotoAndPlay("walkUp");
        }
        break;
      case FACING_WEST:
        if (grid[graphic.gridX + 1][graphic.gridY].walkable)
        {
          graphic.setGridX(graphic.gridX + 1);
          graphic.gotoAndPlay("walkRight");
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
  };
  
  this.pickUp = function() {
    //put logic in here
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
  var commands = [];
 
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
      p.getState();

      if (currentGoalCheck(currentState)) {
        console.log('YAAAAAASSSHHH');
      } else {
        console.log('NOOOOOOOOOOPE');
      }


      $("#run").prop('disabled', false);
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
        p.wait();
        break;
    }

    var startTime = window.performance.now();
    var render_interval = setInterval(function() {
      var time = (window.performance.now() - startTime) / frame_time;
      console.log(time);
      playerGraphic.tween(prev_x, prev_y, time);
      stage.update();
    }, 16);

    var boundExecute = this.execute.bind(this);

    console.log('this: ', this, ', that: ', that);
    setTimeout(function() {
      clearInterval(render_interval);
      playerGraphic.tween(prev_x, prev_y, 1);
      stage.update();
      boundExecute()
    }, frame_time);
  };
}
