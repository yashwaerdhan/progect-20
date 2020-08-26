var car, wall;
var speed, weight, def;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700, 200, 60, 200);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0,0,0);
  car.shapeColor="white";
  car.velocityX = speed;
  collision();
  if(def < 100)
     {
       car.shapeColor="green";
       text("SAFE",200,200);
       text("Speed is " + Math.round(speed),200,220);
       text("Weight is " + Math.round(weight),200,240);
       text("Deformity is " + Math.round(def),200,260);
     }
  else if((def >= 100)&&(def <= 180))
     {
      car.shapeColor="yellow";
      text("MODERATELY SAFE",200,200);
      text("Speed is " + Math.round(speed),200,220);
      text("Weight is " + Math.round(weight),200,240);
      text("Deformity is " + Math.round(def),200,260);
     }
  else if(def > 180)
     {
      car.shapeColor="red"; 
      text("UNSAFE",200,200);
      text("Speed is " + Math.round(speed),200,220);
      text("Weight is " + Math.round(weight),200,240);
      text("Deformity is " + Math.round(def),200,260);
     }
     drawSprites();

}
function collision()
{
  if((car.x - wall.x < car.width/2 + wall.width/2)&&
  (wall.x - car.x < car.width/2 + wall.width/2)&&
  (car.y - wall.y < car.height/2 + wall.height/2)&&
  (wall.y - car.y < car.height/2 + wall.height/2))
  {
     def = (0.5*weight*speed*speed)/22500;
     car.velocityX = 0;
     
  }
}