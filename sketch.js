var PLAY = 1
var END = 0
var gameState = PLAY;

var player1Img, player2Img

var player1, player2

var player1Score, player2Score

var alienSpaceshipImg

var player1Bullet, player2Bullet

var alienSpaceshipLeft, alienSpaceshipRight

var bullet1Group, alienShip1Group

var bullet2Group, alienShip2Group

function preload() {
  bg = loadImage("background.jpeg");
  player1Img = loadImage("spaceship.png");
  player2Img = loadImage("spaceship2.png");
  alienSpaceshipImg = loadImage("alienSpaceship.png");
}


function setup() {
  createCanvas(1000, 700);

  player1 = createSprite(250, 600, 200, 200);
  player1.addImage(player1Img, "Image");
  player1.scale = 0.25;

  player2 = createSprite(750, 600, 200, 200);
  player2.addImage(player2Img, "Image");
  player2.scale = 0.25

  border = createSprite(500, 350, 20, 700);
  border.shapeColor = "red"

  player2Bullet = createSprite(700, 350, 20, 20);
  player2Bullet.shapeColor = "blue"
  player2Bullet.visible = false

  bullet1Group = new Group();
  bullet2Group = new Group();
  alienShip1Group = new Group();
  alienShip2Group = new Group();
}

function draw() {
  background(bg);  

  fill("white");
  textSize(20);
  text("Use A and D to move and W to shoot", 100, 50);
  textSize(18);
  text("Use left and right arrow keys to move and up arrow to shoot", 520, 50);

  if(gameState === PLAY) {

  if(keyDown("LEFT") && player2.x > 500) {
    player2.x = player2.x - 6;
  }
  if(keyDown("RIGHT") && player2.x < 1000) {
    player2.x = player2.x + 6;
  }
  if(keyDown("A") && player1.x > 0) {
    player1.x = player1.x - 6;
  }
  if(keyDown("D") && player1.x < 500) {
    player1.x = player1.x + 6;
  }
  spawnAlienShips();

  if(keyDown("W")) {
    shootPlayer1Bullet();
  }
  if(keyDown("UP")) {
    shootPlayer2Bullet();
  }
  if(alienShip1Group.isTouching(bullet1Group)) {
    alienShip1Group.destroyEach();
    bullet1Group.destroyEach();
  }

}
  drawSprites();
}

function spawnAlienShips() {
  if(frameCount % 100 === 0) {
  alienSpaceshipLeft = createSprite(500, 0, 200, 100);
  alienSpaceshipLeft.addImage(alienSpaceshipImg, "Image");
  alienSpaceshipLeft.scale = 0.35
  alienSpaceshipLeft.x = Math.round(random(50, 450));
  alienSpaceshipLeft.velocityY = 6;
  alienSpaceshipLeft.lifetime = 180;

  alienShip1Group.add(alienSpaceshipLeft);

  alienSpaceshipRight = createSprite(500, 0, 200, 100);
  alienSpaceshipRight.addImage(alienSpaceshipImg, "Image");
  alienSpaceshipRight.scale = 0.35;
  alienSpaceshipRight.x = Math.round(random(550, 950));
  alienSpaceshipRight.velocityY = 6;
  alienSpaceshipRight.lifetime = 180;

  alienShip2Group.add(alienSpaceshipRight);
  }
}

function shootPlayer1Bullet() {
  if(frameCount % 10 === 0) {
  player1Bullet = createSprite(200, 350, 20, 20);
  player1Bullet.shapeColor = "blue";
  player1Bullet.x = player1.x;
  player1Bullet.y = player1.y;
  player1Bullet.velocityY = -7.5;
  player1Bullet.lifetime = 150;

  bullet1Group.add(player1Bullet);
  }
}
function shootPlayer2Bullet() {
  if(frameCount % 10 === 0) {
  var player2Bullet = createSprite(200, 350, 20, 20);
  player2Bullet.shapeColor = "blue";
  player2Bullet.x = player2.x;
  player2Bullet.y = player2.y;
  player2Bullet.velocityY = -7.5;
  player2Bullet.lifetime = 150;

  bullet2Group.add(player2Bullet);
  }
}