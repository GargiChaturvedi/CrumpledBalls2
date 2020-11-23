//namespacing for matter.js terms here
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables created here
var engine, world, trash, wall1, wall2, wall3, ground;

function setup() {
  createCanvas(1500,400);
  //engine created here
  engine = Engine.create();
  //world added to the engine
  world = engine.world;
  //trash created through Ball class
  trash = new Ball(100, 370, 70);
  //ground created through Ground class
  ground = new Ground(750, 390, 1500, 20);
  //dustbin created through Wall class
  wall1 = new Wall(1100, 280, 300, 20, true);
	wall2 = new Wall(1000, 310, 20, 100, false);
	wall3 = new Wall(1200, 310, 20, 100, false);
}

function draw() {
  background(255);
  //engine started
  Engine.update(engine);
  //displaying the dustbin, trash and ground
  ground.display();
  trash.display();
  wall1.display();
  wall2.display();
  wall3.display();
}

//when up_arrow key pressed, the trash is put in the dustbin
function keyPressed() {
  if(keyCode === UP_ARROW) {
      var move = {
          x: 1000,
          y: -1000
      }
      Body.applyForce(trash.ball, trash.ball.position, move);
    }
}