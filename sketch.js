var fixed_rect, moving_rect;


function setup() {
  createCanvas(800,400);
   fixed_rect = createSprite(300, 200, 50, 100);
   moving_rect = createSprite( 600, 200, 80, 40);
   fixed_rect.shapeColor ='green';
    moving_rect.shapeColor ='green';
    moving_rect.velocityX =-5;

}

function draw() {
  background('yellow');  

   

    if (moving_rect.x-fixed_rect.x == moving_rect.width/2 +fixed_rect.width/2){
      moving_rect.velocityX =5;
    }
  drawSprites();
}