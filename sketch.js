var monkey , monkey_running,ground,background,backgroundImg
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
 // backgroundImg=loadImage("jungle.jpg");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400); 
  


  
monkey=createSprite(60,300,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;

ground=createSprite(60,335,800,10);
ground.velocityX=-4;
ground.x = ground.width /2;


score=0;

FoodGroup=createGroup();
obstacleGroup=createGroup();
}


function draw() {
  stroke("white");

fill("white")
text("score:"+score,500,50)


  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.07
  }
  
background("green") ;
textSize(20); 
fill("black");
text("SurvivalTime: "+ score, 120,50);
 score = score + Math.round(getFrameRate()/60); 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
 if(keyDown("space")&& monkey.y>=200){
   monkey.velocityY=-12; 
    } 
  
 monkey.velocityY = monkey.velocityY + 0.8 
  
 monkey.collide(ground);
  
 spawnObstacle(); 
 spawnFood(); 
  
  drawSprites(); 
}

function spawnFood() {
if (frameCount % 80 === 0) {
  var banana = createSprite(390, random(200, 250),60,10);
  banana.addImage(bananaImage);
  banana.scale = 0.08;
  banana.velocityX = -6;
  banana.lifetime = 100;
  FoodGroup.add(banana);
}
}

function spawnObstacle() {
  if (frameCount % 300 === 0) {
    var rock = createSprite(390, 310,60,10);
      
    rock.addImage(obstacleImage);
    rock.scale = 0.2;
    rock.velocityX = -6;
    rock.lifetime = 100;
    obstacleGroup.add(rock);
}
}



