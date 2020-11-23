class BaseClass {
    //constructing the class
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        //important properties of the object
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        //creating the body and added to the world
        this.ball = Bodies.circle(this.x, this.y, this.radius, options);
        this.image = loadImage("trash.png");
        World.add(world, this.ball);
    }
    //displaying the ball
    display() {
        var pos = this.ball.position;
        var angle = this.ball.angle;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 180, 180);
        pop();
    }
}