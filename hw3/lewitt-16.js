function setup() {
	createCanvas(500, 500);
	horizontalLines(0, 125);
	verticalLines(125, 0);
	diagonalLines(0, 0);
}


function horizontalLines(x, y) {
	var lines = 0;
	var startX = x;
	var startY = y;
	var endX = width;
	var endY = y;
	while (lines < 250) {
		line(startX, startY + lines, endX, endY + lines);
		lines = lines + 5;
	}
}

function verticalLines(x, y) {
	var lines = 0;
	var startX = x;
	var startY = y;
	var endX = x;
	var endY = height;
	while (lines < 250) {
		line(startX + lines, startY, endX + lines, endY);
		lines = lines + 5;
	}
}
	
function diagonalLines(x, y) {
	var lines = 0;
	while (lines < 250) {
		line(x, y+250 + lines, x + 500, y + lines);
		lines = lines + 5;
	}

}
