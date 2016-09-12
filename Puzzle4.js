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



function gate() {
  repeatDown(4);
  right();
  var color = getColor();
  repeatDown(1);
  setColor(color);
  repeatRight(3);
  up();
  down();
  repeatRight(3);
  up();
  
  
}

gate();
	
  
function tap() { 
  var color = getColor();
  down();
  setColor(color);
  repeatRight(3);
    
    
  }

tap();
