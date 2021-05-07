//variables go up here
let img1;
let img2;
let img3;
let img4;
let vid1

function preload() {
  img1 = loadImage('Assets/walk1.JPG');
  img2 = loadImage('Assets/walk2.JPG');
  img3 = loadImage('Assets/walk3.JPG');
  img4 = loadImage('Assets/walk4.JPG');
  vid1 = ceateVideo('Assets/video1.MOV');
  //stuff to prepare gets done here
}

function setup() {
  createCanvas(1920, 1080);
  vid1.position(100, 600)
  //things to establish the "sandbox" go here
}

function draw() {
  background(255, 204, 0);
  rect(0, 0, 700, 500);
  image(img1, 0, 0);
  image(img2, 450, 300);
  image(img3, 1500, 100);
  //think of this area as a looping function that continuall puts things on screen, in order
}

function mousePressed() {
  if (vid1.loop()) {
    vid1.stop();
  } else {
    vid1.loop();
  }
  //what happens when I click?
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}
