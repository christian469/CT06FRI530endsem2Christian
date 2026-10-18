let posX = 300;
let posy = 200;;
let ballXSpeed = 5
let ballYspeed = 5
let ballX = 300;
let ballY = 200;

function setup(){
    createCanvas(600, 400);
    background('white');
    fill('limegreen');
}

function draw(){
    background('white');
    fill('limegreen');
    noStroke();

    ballX = ballX +ballXSpeed;

    if (ballX + 50/ 2>= width || ballX - 50/ 2 <= 0){
    ballXSpeed = ballXSpeed * -1;
}

ballY = ballY + ballYspeed;
if (ballY + 50/ 2 >= height || ballY - 50/ 2 <= 0){
    ballYspeed = ballYspeed * -1;
}



    circle(ballX, 200, 50);
}