class Bow {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.sling = Constraint.create(options);
        this.bow = loadImage("bow1.png")
        this.girl = loadImage("Shooter.png")
        this.pointB = pointB
        World.add(world, this.sling);
    }
 fly(){
    this.sling.bodyA = null
 }

 attach(body){
    this.sling.bodyA = body 
 }
    display(){
        image(this.bow,50,370,400,300)
        image(this.girl,-10,300,500,500)
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke(81,49,25)
        strokeWeight(4);
        line(pointA.x-50, pointA.y, pointB.x-10, pointB.y-17);
        line(pointA.x-50, pointA.y, pointB.x-20, pointB.y+220);
        }
    }
    
}
