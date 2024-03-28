class Bird {
    constructor(x, y, d, color) {
        this.body = Matter.Bodies.circle(x,y,d);
        Matter.World.add(world, this.body);
        this.d = d;
        this.color = color;
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