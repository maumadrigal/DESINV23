function setup() {
	createCanvas(500, 500);
	verticalLines(0, 0);
}


function verticalLines(x, y) {
	var length = 0;

	var endY = 500;
	while (length < 500) {
		line(width/2, 0, 0 + length, height);
		length = length + 10;
	}
}
