var color = getColor();

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
  repeatDown(2);
  var color = getColor();
  repeatDown(3);
  repeatRight(2);
  setColor(color);
  left();
  repeatRight(3);
  up();
 

}


gate();
