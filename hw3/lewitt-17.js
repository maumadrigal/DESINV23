function setup() {
	createCanvas(1000, 500);
	horizontalLines(0, 0);
	diagonalLines(250, -250);
	diagonalLinesDown(850, -250);
}


function horizontalLines(x, y) {
	var lines = 0;
	var startX = x;
	var startY = y;
	var endX = 150;
	var endY = y;
	while (lines < 500) {
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
	while (lines <1000) {
		line(x, y + 250 + lines, x + 500, y + lines);
		lines = lines + 5;
	}
}

function diagonalLinesDown(x, y) {
	var lines = 0;
	while (lines <1000) {
		line(x, y + lines, x + 250, y + 250 + lines);
		lines = lines + 5;
	}
}
