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




if (getColor() == "blue") {
 down();
} else {
  repeatRight(2); 
}

if (getColor() == "red") {
 up();
} else {
  repeatRight(2); 
}

if (getColor() == "blue") {
 down();
} else {
  repeatRight(2); 
}

if (getColor() == "red") {
 up();
} else {
  repeatRight(2); 
}

if (getColor() == "blue") {
 down();
} else {
  repeatRight(2); 
}

if (getColor() == "red") {
 up();
} else {
  repeatRight(2); 
}

if (getColor() == "blue") {
 down();
} else {
  repeatRight(2); 
}

if (getColor() == "red") {
 up();
} else {
  repeatRight(2); 
}

if (getColor() == "blue") {
 down();
} else {
  repeatRight(3); 
}

if (getColor() == "red") {
 up();
} else {
  repeatRight(3); 
}
