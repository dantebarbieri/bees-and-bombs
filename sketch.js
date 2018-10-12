w = 100
a = 0

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(128, 179, 128);
  translate(0, 0, -width);
  directionalLight(179, 128, 179, 0, 0, -1);
  directionalLight(179, 128, 179, -1, 0, 0);
  directionalLight(179, 179, 88, 0, 1, 0);
  rotateX(-QUARTER_PI);
  rotateY(QUARTER_PI);
  ambientMaterial(138);
  for(let i = -width / 2; i < width / 2; i += w){
    for(let j = -width / 2; j < width / 2; j += w){
      push();
      translate(i, 0, j);
      box(w, 1000*sin(a + map(pow(i, 2) + pow(j, 2), 0, pow(width, 2) / 2, 0, PI)), w);
      pop();
    }
  }
  a += 0.0075;
}
