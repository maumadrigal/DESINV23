function setup() {
	createCanvas(500, 500);
	diamond(0, 0);

}


function diamond(x, y) {
	var lines = 0;
	var startX = x;
	var startY = y;
	var endX = 500;
	var endY = 0;
	while (lines < 250) {
		line(0 + lines, 250 - lines, endX - lines, 250 - lines);
		line(250 - lines, 500 - lines, 250 + lines, 500 - lines);
		lines = lines + 10;
	}
}
