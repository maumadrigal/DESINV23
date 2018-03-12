
function yourPatch(x, y) {
  noFill();
  stroke(50);
  rect(x, y, 100, 100);



	//rect(x+40, y+40, 20, 40);
  //rect(x+20, y+60, 40, 20);

  // overlay of lines
  stroke(0);
  var lines = 50;
  // while (lines < 50) {
  //   line(x+lines, y, x, y+lines);
  //   lines = lines + 5;
  // }
  stroke(200);
  while (lines < 100) {
    line(x+lines, y, x, y+lines);
    lines = lines + 3;
  }
  stroke(255, 30, 0);
  lines = 0;
  while (lines < 50) {
    line(x+100, y+lines, x+lines, y+100);
    lines = lines + 4;
  }
	lines = 0;
	var sideLines = 0;
  stroke(0, 150, 40);

  while (lines <= 50) {
    line(x - 100 + lines, (y - 100 + 50) - lines, (x + 150) + lines, (y + 200) - lines);
		lines = lines + 2;
		sideLines = sideLines + 11;
  }
	
	  // blocky J
  fill(50);
  noStroke();
  rect(x+20, y+20, 60, 10);
  rect(x+20, y+30, 10, 50);
	rect(x+45, y+30, 10, 50);
	rect(x+70, y+30, 10, 50);
}

function setup() {
background(255);
yourPatch(0, 0); // draw patch at upper-left

background(255);
yourPatch(width-100, height-100); // draw patch at lower-right
}

