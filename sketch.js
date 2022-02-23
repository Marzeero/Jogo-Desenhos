//"Jogo De Desenhos"
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  createEdgeSprites();
}

function draw() 
{

  if(keyIsDown(RIGHT_ARROW)){
    background("red")
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  if(keyDown("W")){
    box.y = box.y - 3;
  }
  if(keyDown("S")){
    box.y = box.y + 3;
  }
  if(keyDown("D")){
    box.x = box.x + 3;
  }
  if(keyDown("A")){
    box.x = box.x - 3;
  }


  
  drawSprites();
}
