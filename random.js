//P5js sketch that makes a random path
let path = [];
let pathLength = 100;
let pathWidth = 10;
let pathColor = [255, 0, 0];
let pathSpeed = 2;

function setup() {
    createCanvas(400, 400);
    background(255);
    for (let i = 0; i < pathLength; i++) {
        path.push(createVector(random(width), random(height)));
    }
    }
function draw() {
    background(255);
    stroke(pathColor);
    strokeWeight(pathWidth);
    noFill();
    beginShape();
    for (let i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
    }
    endShape();
    
    // Move the path
    for (let i = 0; i < path.length; i++) {
        path[i].x += random(-pathSpeed, pathSpeed);
        path[i].y += random(-pathSpeed, pathSpeed);
        path[i].x = constrain(path[i].x, 0, width);
        path[i].y = constrain(path[i].y, 0, height);
    }
}
function mousePressed() {   
    path = [];
    for (let i = 0; i < pathLength; i++) {
        path.push(createVector(random(width), random(height)));
    }
}
function keyPressed() {     
    if (key === 'r') {
        path = [];
        for (let i = 0; i < pathLength; i++) {
            path.push(createVector(random(width), random(height)));
        }
    }
}
function keyTyped() {
    if (key === 's') {
        saveCanvas('random_path', 'png');
    }
}
function keyReleased() {
    if (key === 'r') {
        path = [];
        for (let i = 0; i < pathLength; i++) {
            path.push(createVector(random(width), random(height)));
        }
    }
