class Box {
    constructor(x, y, w, h, color, solid) {
        this.body = Bodies.rectangle(x, y, w, h);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.color = color;
        this.body.isStatic = solid;

    }
    show() {
        const pos = this.body.position;
        const angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();

    }
}