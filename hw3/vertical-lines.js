
function setup() {
	createCanvas(500, 500);
	verticalLines(0, 0);
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
