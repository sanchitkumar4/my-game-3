var backgroundImg;
var zhunter,zhunterImg;
var zombieImg;
var hunterShoot;
var bullet,bulletImg;


function preload(){
  backgroundImg=loadImage("backgroundimg.jpg");
  zhunterImg=loadAnimation("gun animation (3).png","gun animation (3).png","gun animation (3).png");
  hunterShoot=loadAnimation("gun animation.png","gun animation (2).png","gun animation (3).png","gun animation (4).png");
  zombieImg=loadImage("zombies.png")
  bulletImg=loadImage("bullet (1).png");
}

function setup() {
  createCanvas(1500,800);

  zhunter=createSprite(80,200,30,30);
  zhunter.addAnimation("hunter",zhunterImg);
  zhunter.addAnimation("shooting",hunterShoot);
  zhunter.scale=0.7;

}

function draw() {
  background(backgroundImg);  
  spawnZombies();

  if(keyDown("space")){
  zhunter.changeAnimation("shooting",hunterShoot);
  Spawnbullet();
}

if(keyWentUp("space")){
   zhunter.changeAnimation("hunter",zhunterImg);
}

if(keyDown("UP_ARROW")){
  zhunter.y=zhunter.y-50
}

if(keyDown("DOWN_ARROW")){
  zhunter.y=zhunter.y+50;
}

  drawSprites();
}

function spawnZombies(){
 if(frameCount%60==0){
  var zombie =  createSprite(1500,200,30,30);
  zombie.y=Math.round (random(130,600));
  zombie.addImage(zombieImg);
  zombie.velocityX= -4;
  zombie.scale=0.3;
 }
}

function Spawnbullet(){
bullet =createSprite(zhunter.x+65,zhunter.y-45,10,10);
bullet.addImage("bullet",bulletImg);
bullet.velocityX=3;
bullet.scale=0.06;
}
