var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(200, 200, 50, 50);
 movingRect=createSprite(800,200,50,50);
 fixedRect.shapeColor="green";
 movingRect.shapeColor="green";
fixedRect.velocityX=5;
movingRect.velocityX=-5;

}

function draw() {
  background("yellow");  
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if(movingRect.y-fixedRect.y<fixedRect.height/2-movingRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2-movingRect.height/2)
{
  movingRect.velocityY=movingRect.velocityY*(-1);
  fixedRect.velocityY=fixedRect.velocityY*(-1);
}
  drawSprites();
}