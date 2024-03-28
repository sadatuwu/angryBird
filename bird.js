class Bird {
    constructor(x, y, d, color) {
        this.x = x;
        this.y = y;
        this.body = Matter.Bodies.circle(x,y,d);
        Matter.World.add(world, this.body);
        this.d = d;
        this.color = color;
    }
    reset() {
        Matter.Body.setPosition(this.body, { x: this.x, y: this.y });
        Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(this.body, 0);
        Matter.Body.setAngle(this.body, 0);
    }
    
    show() {
        const pos = this.body.position;
        const angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        rectMode(CENTER);
        circle(0, 0, this.d*2);
        pop();

    }
}