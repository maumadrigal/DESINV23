
function setup() {
  createCanvas(340, 340);
	background(255);
	colorMode(RGB, 255);
	noStroke();
	i = 100
	while(i > 0) {
  	  fill(random(360), random(0, 255), random(0, 255));
 	  rect(random(width), random(height), random(0, 80), random (20, 100));
	  i = i - 1;
	}
}

