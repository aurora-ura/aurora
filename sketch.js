function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
}

function draw() {
  strokeWeight(random(1, 3));
  stroke(random(100,255), random(100,255), random(100,255));
  fill(3,6);
  rect(0, 0, windowWidth, windowHeight);
  var aurora_size = random(0, windowWidth);
  line(aurora_size, 0, aurora_size, random(300,800)); 
}

