function setup() {
  // proce55ing
    createCanvas(720,480);
}

function draw() {
    background(100, 20, 255, 10);
    for(var i = 0; i < 100; i++){
        ellipse(random(width), random(height),10);
    }
}