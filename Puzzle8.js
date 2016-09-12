
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

function final (){
repeatDown(9);
repeatRight(2); 
repeatUp(9);
repeatRight(2);
repeatDown(9);
repeatRight(2);
repeatUp(9);
repeatRight(2);
repeatDown(8);  
right();  
}

final(); 

