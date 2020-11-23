class Wall {
    //constructing the class
    constructor(x, y, width, height, imgNeeded) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imgNeeded = imgNeeded;
        this.image = loadImage("dustbin.png");
        //important properties of the body
        var options = {
            isStatic: true
        }
        //creating the wall and adding it to the world
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.imgNeeded === true) {
            push();
            imageMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, 250);
            pop();
        }
    }
}