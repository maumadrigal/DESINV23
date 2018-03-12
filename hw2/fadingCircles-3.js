ckground(255);
colorMode(RGB, 50);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(360), 50, 50);
  ellipse(random(width), random(height), random(20, 40));
}
