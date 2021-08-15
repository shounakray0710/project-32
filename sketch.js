var ball;
var blower;
var blowermouth;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

blower = new Blower( 300,height / 2 -100 ,100,20);
blowermouth = new Blowermouth(400,height/2-100,50,50);

  button = createButton("Click to Blow");
  button.position(width/2 , height-100);
  button.class("blowButton");
  button.mousePressed(blow);


}

function draw() {
  background(255,255,255); 
  
  ball.show();
  blower.show();
  blowermouth.show();

  drawSprites();
}


function blow() {
  Matter.Body.applyForce(ball.Body,{ x: 0 , y: 0 },{ x: 0 , y: 0.5 });
}