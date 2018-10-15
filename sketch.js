w = 100
a = 0

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  let h = 100
  background(128, 179, 128);
  directionalLight(179, 128, 179, 0, 0, -1);
  directionalLight(179, 128, 179, -1, 0, 0);
  directionalLight(179, 128, 179, 0, 0, 1);
  directionalLight(179, 128, 179, 1, 0, 0);
  directionalLight(179, 128, 179, -1/sqrt(2), 0, -1/sqrt(2));
  directionalLight(179, 128, 179, 1/sqrt(2), 0, 1/sqrt(2));
  directionalLight(179, 179, 88, 0, 3, 0);
  translate(0, -abs(2*h*sin(2*a)), -18*h);
  rotateX(-QUARTER_PI);
  rotateY(QUARTER_PI);
  rotateY(a);
  // rotateY(map(mouseX, 0, width, -PI, PI));
  ambientMaterial(138);
  let s = 6
  let max_distance = 2 * pow(s, 2)
  for(let i = -s; i <= s; i++){
    for(let j = -s; j <= s; j++){
      push();
      let distance_squared = pow(i, 2) + pow(j, 2);
      let offset = map(distance_squared, 0, max_distance, 0, PI);
      translate(i * w * (1 + abs(sin(a + offset))) / 2, 0, j * w * (1 + abs(sin(a + offset))) / 2);
      box(w, 3*h + abs(7*h*sin(a + offset)), w);
      pop();
    }
  }
  a += 0.0075;
}
