var MovingR,FixedR;

function setup() {
  createCanvas(1200,800);
  MovingR = createSprite(200, 200, 50, 100);
  MovingR.shapeColor = "green"
  FixedR = createSprite(400, 200, 100, 50);
  FixedR.shapeColor = "green"
}

function draw() {
  background("orange");
  MovingR.x = World.mouseX;  
  MovingR.y = World.mouseY;

  if(MovingR.x-FixedR.x < MovingR.width/2  + FixedR.width/2 && FixedR.x-MovingR.x < MovingR.width/2  
    + FixedR.width/2 && MovingR.y-FixedR.y < MovingR.height/2  + FixedR.height/2  &&  
   FixedR.y-MovingR.y < MovingR.height/2  + FixedR.height/2){
    MovingR.shapeColor = "red"
    FixedR.shapeColor = "red"
  }
  else {
    MovingR.shapeColor = "green"
    FixedR.shapeColor = "green"
  }
  drawSprites();
}