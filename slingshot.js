class SlingShot{
    constructor(x,y,body){
        this.body = body;
        const options = {
            pointA : {x:x, y:y},
            bodyB : body,
            stiffness : 0.02,
            length : 50
            // parseInt(body.y-y),
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyB = null;
    }
    reset(){
        this.sling.bodyB = this.body;
    }
    show(){
        if(this.sling.bodyB!=null){
            stroke('black');
            const posA = this.sling.pointA;
            const posB = this.sling.bodyB.position;
            line(posA.x, posA.y, posB.x, posB.y);
            
        }
        // this.fly();
    }
}