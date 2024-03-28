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
    for(let i=0; i<4; i++){
        boxes[i] = new Box(3*width/4, 300-i*BHEIGHT, 50, BHEIGHT, 'red', false);
    }
    bird = new Bird(width/4 , height-150, 25, 'yellow');
    slingshot = new SlingShot(width/4,height-200, bird.body);
    const mouse = Mouse.create(canvas.elt);
    mConstraint = MouseConstraint.create(engine, {Mouse:mouse});
    World.add(world, mConstraint);

}

function mouseClicked(){
    touchX = mouseX; 
    touchY = mouseY;
}
function touchStarted() {
    touchX = mouseX;
    touchY = mouseY;
}

function mouseReleased(){
    var d = dist(touchX, touchY, mouseX, mouseY);
    if (d > 75) { // Adjust this threshold as needed
        setTimeout(() => {
            slingshot.fly();
        }, 100);
    }
}
var touchX, touchY;


function touchEnded() {
    console.log("touch");
    var d = dist(touchX, touchY, mouseX, mouseY);
    if (d > 75) { // Adjust this threshold as needed
        setTimeout(() => {
            slingshot.fly();
        }, 100);
    }
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