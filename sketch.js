const {
    Engine,
    World,
    Bodies,
    Mouse,
    MouseConstraint,
    Constraint
}=Matter;

let ground, boxes=[], bird, slingshot;
let world, engine;
let mConstraint;
const GHEIGHT = 30;
const BHEIGHT = 75;

function setup() {
    const canvas = createCanvas(1024, 576);

    engine = Engine.create();
    world = engine.world;

    ground = new Box(width / 2, height - (GHEIGHT/2), width, GHEIGHT, 'lightgreen', true);
    for(let i=0; i<3; i++){
        boxes[i] = new Box(3*width/4, 300-i*BHEIGHT, 50, BHEIGHT, 'red', false);
    }
    bird = new Bird(width/4 , height-100, 25, 'yellow');
    slingshot = new SlingShot(width/4,height-130, bird.body);
    const mouse = Mouse.create(canvas.elt);
    mConstraint = MouseConstraint.create(engine, {Mouse:mouse});
    World.add(world, mConstraint);

}

function mouseReleased(){
    setTimeout(() => {
        slingshot.fly();
    }, 100);
}

function draw() {
    background('lightblue');
    Engine.update(engine);
    ground.show();
    for(let box of boxes){
        box.show();
    }
    bird.show();
    slingshot.show();
}