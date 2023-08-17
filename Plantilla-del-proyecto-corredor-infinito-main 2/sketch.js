
var gameState= "play"
var cohete,coheteimg;
var rocas,rocasimg,rocasGroup;
var alien,alienimg,alienGroup;
var espacio,espacioimg;
var laser,laserimg
var gameOver,gameOverImg
var restart,restartImg


function preload(){
coheteimg=loadImage("nave.png")
espacioimg=loadImage("2473838.jpg")
rocasimg=loadImage("pngwing.com.png")
alienimg=loadImage("1.png")
laserimg=loadImage("1.png")
gameOverImg=loadImage("g.png")
restartImg=loadImage("r.png")
}

function setup() {
 createCanvas(600,600)
 espacio=createSprite(600,600)
 espacio.addImage("espacio",espacioimg)
 espacio.scale=0.6
 espacio.velocityY = 1;

 alienGroup = new Group()
 rocasGroup = new Group()
 
 cohete=createSprite(301,545,50,50)
 cohete.addImage("cohete",coheteimg)
 cohete.scale=0.2

 gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,220);
  restart.addImage(restartImg);
  
 
  gameOver.scale = 0.5;
  restart.scale = 0.2;
  

 
}
 


function draw() {
    background(255)
    if(gameState === PLAY){


if(espacio.y>400){
    espacio.y=300
}
gameOver.visible = false;
restart.visible = false;

if(keyDown("right")){
    cohete.x = cohete.x +7
}
if(keyDown("left")){
    cohete.x = cohete.x -7
}
if(keyDown("up")){
    cohete.y = cohete.y -7
}
if(keyDown("down")){
    cohete.y = cohete.y +7
}

spawnRocas();
spawnAliens();
 drawSprites();

}
if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
   
   
    if(mousePressedOver(restart)) {
      reset();
    }
   
    espacio.velocityX = 0;
    cohete.velocityY = 0
    
   
  
  rocasGroup.setLifetimeEach(-1);
  alienGroup.setLifetimeEach(-1);
   
   alienGroup.setVelocityXEach(0);
   rocasGroup.setVelocityXEach(0);    
 }


}
function spawnRocas() {
  
    if (frameCount % 60 === 0) {
       rocas = createSprite(300,100,40,40);
      rocas.x = Math.round(random(10,600));
      rocas.addImage("rocas",rocasimg)
    
      rocas.scale = 0.1;
      rocas.velocityY = +3;
      
     
      rocas.lifetime = 175;
      
      
      rocas.depth = cohete.depth;
      cohete.depth = cohete.depth + 1;
      
      rocasGroup.add(rocas)
      
   
      }
  }
  function spawnAliens() {
  
    if (frameCount % 70 === 0) {
       alien = createSprite(10,10,10,10);
      alien.x = Math.round(random(100,500));
      alien.addImage("alien",alienimg)
    
      alien.scale = 0.2;
      alien.velocityY = +4;
      
      alien.depth = cohete.depth;
      cohete.depth = cohete.depth + 1;
      
     
      alien.lifetime = 175;
      
      alienGroup.add(alien)
      
      
   
      }
  
    }  
    function reset(){
        gameState = PLAY
        gameOver.visible = false;
        restart.visible = false;
        cloudsGroup.destroyEach();
       obstaclesGroup.destroyEach();
       
       
      }
    


