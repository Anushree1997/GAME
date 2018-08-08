var s;
var scl = 20;
var myscore=0;
var food;
var snakespeed = 5;
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(snakespeed);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}



function draw() {
  background(34,139,34);

  if (s.eat(food)) {
    pickLocation();
	myscore++;
	
  }
  s.death(myscore);
  s.update();
  s.show();


  fill(255,0,0);
  rect(food.x, food.y, scl, scl);
}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}