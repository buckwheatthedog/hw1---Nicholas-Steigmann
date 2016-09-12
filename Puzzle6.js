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






function boop() {
right();
var color = getColor();
if (getColor() == "red") {
  repeatUp(3);
} else {
  repeatDown(3);
}  
}
  
function bop() {
var color = getColor();
if (getColor() == "blue") {
  right();
  up();
  down();
} else {
  left();
  up();
  down();
}  
    
  }

boop();
bop();
