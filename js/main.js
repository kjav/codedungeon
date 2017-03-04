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

function Person(x, y) {
  var xPos = x;
  var yPos = y;
  var orientation = FACING_SOUTH;
  
  this.moveForward = function() {
    //if tile blocked logic here
    //else
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
  };
  this.moveBackward = function() {
    //if tile blocked logic here
    //else
    switch(orientation) {
      case FACING_NORTH:
        yPos += 1;
        break;
      case FACING_EAST:
        xPos -= 1;
        break;
      case FACING_SOUTH:
        yPos -= 1;
        break;
      case FACING_WEST:
        xPos += 1;
        break;
    }
  };
  this.turnRight = function() {
    switch(orientation) {
      case FACING_NORTH:
        orientation = FACING_EAST;
        break;
      case FACING_EAST:
        orientation = FACING_SOUTH;
        break;
      case FACING_SOUTH:
        orientation = FACING_WEST;
        break;
      case FACING_WEST:
        orientation = FACING_NORTH;
        break;
    }
  };
  this.turnLeft = function() {
    switch(orientation) {
      case FACING_NORTH:
        orientation = FACING_WEST;
        break;
      case FACING_EAST:
        orientation = FACING_NORTH;
        break;
      case FACING_SOUTH:
        orientation = FACING_EAST;
        break;
      case FACING_WEST:
        orientation = FACING_SOUTH;
        break;
    }
  };
  this.turnLeft = function() {
    switch(orientation) {
      case FACING_NORTH:
        orientation = FACING_WEST;
        break;
      case FACING_EAST:
        orientation = FACING_NORTH;
        break;
      case FACING_SOUTH:
        orientation = FACING_EAST;
        break;
      case FACING_WEST:
        orientation = FACING_SOUTH;
        break;
    }
  };
  this.pushObject = function() {
    switch(orientation) {
      case FACING_NORTH:
        //check if tile infront has movable object
        //move it
        break;
      case FACING_EAST:
        //check if tile infront has movable object
        //move it
        break;
      case FACING_SOUTH:
        //check if tile infront has movable object
        //move it
        break;
      case FACING_WEST:
        //check if tile infront has movable object
        //move it
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
    console.log("x Position: " + xPos + ", y Position: " + yPos + ", Orientation: " + orientation);
  }
}

function pushObject(x, y) {
  
  this.getState = function() {
    console.log("x Position: " + xPos + ", y Position: " + yPos);
  }
}

function Commands(p) {
  var commands = [];
  
  this.moveForward = function() {
     commands.push(MOVE_FORWARD);
  };
  this.moveBackwards = function() {
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
  
  
  this.execute = function() {
    p.getState();
    for (i = 0; i < commands.length; i++){
      //run animations 
      switch(commands[i])
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
    }
    p.getState();
    commands = [];
  };
}

