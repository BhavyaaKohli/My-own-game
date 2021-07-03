const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var girl
var girlImg
var board 
var arrow1, arrow2, arrow3, arrow4 , bow 
var score = 0
var backgroundImg
var ground 
var arrows = []
var gameState = 'onBow'
function preload() {

    backgroundImg = loadImage("stadium.jpeg");
     //girlImg =  loadImage("Shooter.png")

}
    


function setup(){
  createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    board = new Board (width-100 ,height/2+200 )
    ground = new Ground(width/2, height-30, width , 10 )

    arrow1 = new Arrow ( 280 ,420, 300,100)
    arrow2 = new Arrow ( 380 ,700, 300,60)
    arrow3 = new Arrow ( 380 ,700 ,300,60)
    arrow4 = new Arrow ( 380 ,700 ,300,60)
    arrows.push(arrow4)
    arrows.push(arrow3)
    arrows.push(arrow2)
    arrows.push(arrow1)
   
    

    bow = new Bow (arrow1.body , {x :280 , y:420 })
    
    //girl = createSprite(width/2-500,height/2+150,10,10)
    //girl.addImage(girlImg)
}

function draw() { 
    Engine.update(engine)
   


    background(backgroundImg);
   board.display()
   ground.display()

   arrow1.display()
   arrow2.display()
   arrow3.display()
   arrow4.display()
   
   bow.display()
   
   //drawSprites()

    

}

function mouseDragged(){
if(gameState!== "launched" ){
Matter.Body.setPosition (arrows[arrows.length-1].body,{x:mouseX , y: mouseY})
return false
}
}

function mouseReleased(){
  bow.fly()
  gameState="launched"
  arrows.pop()
  return false
}

function keyPressed(){
  if(keyCode ===32 & gameState==="launched"){
    if(arrows.length>=0){
      Matter.Body.setPosition(arrows[arrows.length-1].body,{x:250 , y: 100})
      bow.attach(arrows[arrows.length-1].body)
      gameState="onBow"
    }
  }
}