var fixedRect, movingRect, box, box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box=createSprite(200,300,50,50);
  box.shapeColor="white";
  box2=createSprite(900,500,90,40);
  box2.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,box)){
    movingRect.shapeColor = "blue";
    box.shapeColor = "blue";
  }

  else if(isTouching(movingRect,box2)){
    movingRect.shapeColor="blue";
    box2.shapeColor="blue";
  }

  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }

  else{
    movingRect.shapeColor = "green";
    box.shapeColor = "green";
    box2.shapeColor="yellow";
    fixedRect.shapeColor="green";
  }
  
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
 return false;
}
}