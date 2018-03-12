function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 100, 0);
  } else if (key == 'G') {
    fill(150, 255, 10);
  } else if (key == 'B') {
    fill(140, 80, 255); 
  } else if (key == 'L') {
		fill(90, 54, 200);
	} else if (key == 'D') {
		fill(64, 92, 100);
	} else if (key == 'Y') {
		fill(8, 230, 130);
	}
}
