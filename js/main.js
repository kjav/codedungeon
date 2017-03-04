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

// Time per animation in ms
var frame_time = 500;

function Person(x, y, graphic) {
  var orientation = FACING_SOUTH;
  
  this.moveForward = function() {
    switch(orientation) {
      case FACING_NORTH:
        if (grid[graphic.x][graphic.y - 1].walkable)
        {
          graphic.y -= 1;
          animation.gotoAndPlay("walkUp");
        }
        break;
      case FACING_EAST:
        if (grid[graphic.x + 1][graphic.y].walkable)
        {
          graphic.x += 1;
          animation.gotoAndPlay("walkRight");
        }
        break;
      case FACING_SOUTH:
        if (grid[graphic.x][graphic.y + 1].walkable)
        {
          graphic.y += 1;
          animation.gotoAndPlay("walkDown");
        }
        break;
      case FACING_WEST:
        if (grid[graphic.x - 1][graphic.y].walkable)
        {
          graphic.x -= 1;
          animation.gotoAndPlay("walkLeft");
        }
        break;
    }
  };
  this.moveBackward = function() {
    //if tile blocked logic here
    //else
    switch(orientation) {
      case FACING_NORTH:
        if (grid[graphic.x][graphic.y + 1].walkable)
        {
          graphic.y += 1;
          animation.gotoAndPlay("walkDown");
        }
        break;
      case FACING_EAST:
        if (grid[graphic.x - 1][graphic.y].walkable)
        {
          graphic.x -= 1;
          animation.gotoAndPlay("walkLeft");
        }
        break;
      case FACING_SOUTH:
        if (grid[graphic.x][graphic.y - 1].walkable)
        {
          graphic.y -= 1;
          animation.gotoAndPlay("walkUp");
        }
        break;
      case FACING_WEST:
        if (grid[graphic.x + 1][graphic.y].walkable)
        {
          graphic.x += 1;
          animation.gotoAndPlay("walkRight");
        }
        break;
    }
  };
  this.turnRight = function() {
    switch(orientation) {
      case FACING_NORTH:
        orientation = FACING_EAST;
        animation.gotoAndPlay("stopRight");
        break;
      case FACING_EAST:
        orientation = FACING_SOUTH;
        animation.gotoAndPlay("stopDown");
        break;
      case FACING_SOUTH:
        orientation = FACING_WEST;
        animation.gotoAndPlay("stopLeft");
        break;
      case FACING_WEST:
        orientation = FACING_NORTH;
          animation.gotoAndPlay("stopUp");
        break;
    }
  };
  this.turnLeft = function() {
    switch(orientation) {
      case FACING_NORTH:
        orientation = FACING_WEST;
        animation.gotoAndPlay("stopLeft");
        break;
      case FACING_EAST:
        orientation = FACING_NORTH;
          animation.gotoAndPlay("stopUp");
        break;
      case FACING_SOUTH:
        orientation = FACING_EAST;
        animation.gotoAndPlay("stopRight");
        break;
      case FACING_WEST:
        orientation = FACING_SOUTH;
        animation.gotoAndPlay("stopDown");
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
  this.execute = function(that) {
    console.log('Executing. c: ', commands);
    if (commands.length == 0) {
      p.getState();
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
    }

    var startTime = window.performance.now();
    var render_interval = setInterval(function() {
      var time = (window.performance.now() - startTime) / frame_time;
      playerGraphic.drawShapeTween(prev_x, prev_y, time);
      stage.update();
    }, 16);

    var boundExecute = this.execute.bind(this);

    console.log('this: ', this, ', that: ', that);
    setTimeout(function() {
      clearInterval(render_interval);
      playerGraphic.drawShape();
      stage.update();
      boundExecute()
    }, frame_time);
  };
}
