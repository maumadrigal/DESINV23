function setup() {
	createCanvas(500, 500);
	horizontalLines(0, 0);

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
