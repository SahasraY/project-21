var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  wall=createSprite(700,200,thickness,height/2);
  bullet=createSprite(50,200,50,10);
  bullet.velocityX=3;
  
  speed=random(223,321);
  weight=random(30,52);
 thickness=random(22,83);
}

function draw() {
  background("pink");
  
  bullet.shapeColor="gold";

  if(bullet.x-wall.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
     }

     if(damage>10){
       wall.shapeColor=color(225,0,0);
     }
     if(damage<10){
       wall.shapeColor=color(0,225,0);
     }
  
 
  
  drawSprites();
}