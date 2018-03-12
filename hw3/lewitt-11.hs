function setup() {
	createCanvas(500, 500);
	horizontalLines(0, 0);
	verticalLines(0, 0);
	angleMode(DEGREES);
	rotate(45);
	noFill();
	rectMode(CENTER);
	multipleRects(300, 30);
}


function horizontalLines(x, y) {
	var lines = 0;
	var startX = x;
	var startY = y;
	var endX = 500;
	var endY = 0;
	while (lines < 500) {
		line(startX, startY + lines, endX, endY + lines);
		lines = lines + 10;
	}
}

function verticalLines(x, y) {
	var lines = 0;
	var startX = x;
	var startY = y;
	var endX = 0;
	var endY = 500;
	while (lines < 500) {
		line(startX + lines, startY, endX + lines, endY);
		lines = lines + 10;
	}
}

function multipleRects(x, y) {
	var size = 0;
	while (size < 1000) {
		rect(300, 70, 10 + size, 10 + size);
		size = size + 15;
	}
}
