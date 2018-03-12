function setup() {
	createCanvas(500, 500);
	noFill();
	concentricCircles(250, 250);
}


function concentricCircles(x, y) {
	ellipseMode(CENTER);
	var size = 0;
	var startX = x;
	var startY = y;
	var circW = 5;
	var circH = 5;
	while (size < 500) {
		ellipse(x, y, circW + size, circH + size);
		size = size + 10;
	}
}
