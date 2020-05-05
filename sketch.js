var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);

  car=createSprite(50,200,50,50);
  car.shapeColor="green";

  wall=createSprite(1100,200,60,height/2);

  speed=random(55,90);

  weight=random(400,1500);
console.log(100);
}

function draw() {
  background("black"); 

  fill ("white");

  stroke ("white");

  car.velocityX=speed;

  car.X=wall.X;

  text ( Math.abs(car.x - wall.x) , 100, 100);

  if(wall.x-car.x <(car.width + wall.width)/2){
    car.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
  }
  
  drawSprites();
}