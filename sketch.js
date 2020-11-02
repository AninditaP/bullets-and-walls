var bullets,wall;
var speed,thickness,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  thickness=random(22,83);
  weight=random(400,1500);
  bullets=createSprite(50,200,50,5);
  wall=createSprite(1500,200,thickness,height/2);
  bullets.velocityX=speed;
  bullets.shapeColor="white";
  wall.shapeColor="white";

}

function draw() {
  background("purple");  
  if(isTouching(wall,bullets)){
     bullets.velocityX=0;
     var deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
     if(deformation>10) {
       wall.shapeColor="red";
     }
     if(deformation<10) {
        wall.shapeColor="lightgreen";
     }

  }
  drawSprites();
}