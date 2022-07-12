var ball 
function setup() {
  createCanvas(400,400);
  ball = createSprite(20,20,20,20);
}

function draw() 
{
  background("yellow");

  if (keyIsDown(UP_ARROW)){
    ball.position.y -= 1;
  }
  if (keyIsDown(DOWN_ARROW)){
    ball.position.y += 1;
  }
  if (keyIsDown(RIGHT_ARROW)){
    ball.position.x += 1;
  }
  if (keyIsDown(LEFT_ARROW)){
    ball.position.x -= 1;
  }








  drawSprites();
}




