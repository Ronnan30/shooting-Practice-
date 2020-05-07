
var board 
var target 
var board2 
var score=0 

function preload(){
 board = loadImage("sprite_0.png");
  
}

function setup() {
  createCanvas(800,600);
  
  board2= createSprite(50,180,20,50);
  
  
  
}

function draw() {
  background("white");
  
  spawnDart()
  
  if(mouseIsOver(target)){
    target.destroy()
    console.log("works")
   score=score+1

  }

  
  
  
  textSize(25)
  text("score:",score,750,100)
  drawSprites();
}
function spawnDart(){

 
  
x=Math.round(random(0,800))
y=Math.round(random(0,600))

if(World.frameCount%70===0){
  
  
  target=createSprite(x,y,20,20)
  target.addImage("dartBoard",board)
 target.scale=1/2
 target.debug=true
target.setCollider("circle",0,0,50)
target.lifetime= 50
}






}