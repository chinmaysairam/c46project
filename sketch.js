var itachi
var itachiImage
var itachiImage2
var itachiImage3
var itachiImage4
var itachiImage5
var itachiimage12
var ground
var enemy,enemy1,enemy2,enemy3;
var score=0
var enemyGroup
var GameState="play"
var InvisibleGround
function preload(){
itachiImage=loadAnimation("Image1.png","Image2.png","Image3.png","Image4.png","Image5.png","image12.png")
groundImage=loadImage("image6.jpeg")
enemyImage=loadImage("image7.png")
enemy1Image=loadImage("image8.png")
enemy2Image=loadImage("image9.png")
enemy3Image=loadImage("image10.png")



}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  ground=createSprite(400,200,800,400);
  ground.addAnimation("go",groundImage)
  ground.scale=5.5

  itachi=createSprite(250,300,50,50)
itachi.addAnimation("fly",itachiImage)
itachi.scale=2
enemyGroup=new Group()
InvisibleGround=createSprite(400,height-20,width,10)
InvisibleGround.visible=false
}

function draw() {
  background(255,255,255);  
if(GameState==="play"){
if(keyWentDown("space")){
itachi.velocityY=-12

}
itachi.velocityY+=0.5
if(ground.x>800){
ground.x=ground.width/2

}
if(frameCount%80===0){
spawnEnemies()

}
if(frameCount%10===0){
score=score+1

}
ground.velocityX=5

if(enemyGroup.isTouching(itachi)){
GameState="end"


}
}

else if(GameState==="end"){
ground.velocityX=0
itachi.velocityY=0
enemyGroup.setVelocityXEach(0)
enemyGroup.setLifetimeEach(-1)

}
itachi.collide(InvisibleGround)
  drawSprites();
  fill("red")
  textSize(20)
  text("score: "+score,width-100,50)
  
}
function spawnEnemies(){
var enemy=createSprite(width,250,30,30)
enemy.velocityX=-5
var rand=Math.round(random(1,4))
switch(rand){
  case 1:enemy.addImage(enemyImage)
  break
  case 2:enemy.addImage(enemy1Image)
  break
  case 3:enemy.addImage(enemy2Image)
  break
  case 4:enemy.addImage(enemy3Image)
  break
  
}

enemy.lifetime=width/enemy.velocityX
enemyGroup.add(enemy)
}