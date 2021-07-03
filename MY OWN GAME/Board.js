class Board {
    constructor(x,y){
    var options = {
     density : 1,
     isStatic: true 
 } 
    
 
         this.body = Bodies.rectangle(x, y,50,50, options )  ;
         this.image = loadImage("board.png");
         World.add(world, this.body);
    }
 
    display(){
    var pos =  this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x , pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image, 0, 0,350 ,350  )
    pop()
    }

   };
  