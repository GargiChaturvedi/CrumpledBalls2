class Ground {
    //constructing the class
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //properties of the ground
        var options = {
            isStatic: true
        }
        //creating the ground and adding it to the world
        this.ground = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.ground);
    }
    //displaying the ground
    display() {
        rectMode(CENTER);
        var pos = this.ground.position;
        fill("white");
        //rectangle created w.r.t to the ground object
        rect(pos.x, pos.y, this.width, this.height);
    }
}