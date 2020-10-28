
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,groundImage
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
      createCanvas(600,400);
      monkey=createSprite(80,300,20,20);
      monkey.addAnimation("running monkey",monkey_running);
      monkey.scale=0.2;
 
      ground=createSprite(300,380,600,20);
      //ground.velocityX=-5;
      
foodGroup=new Group();
obstacleGroup=new Group();

  
}


function draw() {
      background("white");
      if(ground.x<0){
        ground.x=300;
      }
  monkey.collide(ground);
  if(keyDown("space")){
    monkey.velocityY=-7
  }
  monkey.velocityY=monkey.velocityY+0.7;
  foodSpawn();
  obstacleSpawn()
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
  }
  
  drawSprites();
      if(obstacleGroup.isTouching(monkey)){
    foodGroup.destroyEach();
    obstacleGroup.destroyEach();
    
    text("GameOver",300,50);
    
    
  }
}

function foodSpawn(){
  if(frameCount%120===0){
 banana = createSprite(600,180,10,10);
  banana.velocityX=-4;
  banana.addImage("image banana",bananaImage)
  banana.scale=0.2
  banana.y=Math.round(random(40,180))
  foodGroup.add(banana);
  }
  
}
function obstacleSpawn(){
  if(frameCount%120===0){
 obstacle = createSprite(600,385,10,10);
  obstacle.velocityX=-4;
  obstacle.addImage("imageobstacle",obstacleImage)
  obstacle.scale=0.5
  
  obstacleGroup.add(obstacle);
  }
}

