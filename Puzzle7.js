function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

function repeatRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
  }
}

function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}


function find2() {
  var color = getColor();
  while (remainingDots() > 0) {
    while (getColor() != "red") {
      down(); 
      
      if (getColor() == "red") { 
        repeatRight(2);
      }
    }
  } 
}  
    
function find3() { 
  var color = getColor();
  while (remainingDots() > 0) {
    while (getColor() != "red") {
      up(); 
      
      if (getColor() == "red") { 
        repeatRight(2);
      }
    }
  }
}

  
//find2(); 
//find3();
    
function moveUpOrDown(direction) {
  while (getColor() != "red") {
    if (direction == "up") {
      up();
    }
    else {
      down();
    }
  }
}
    
function switchDirection(direction) {
  var newDirection;
  if (direction == "up") {
    newDirection = "down";
  }
  else {
    newDirection = "up"; 
  }
  return newDirection;
}

function moveRightTwice() {
  right();
  right();
}

function eatGreenDots() {
  var direction = "down"; // start off moving downwards, since I'm at the top left
  while (remainingDots() > 0) {
    moveUpOrDown(direction);
    moveRightTwice();
    direction = switchDirection(direction);
  }
}
  

eatGreenDots();
