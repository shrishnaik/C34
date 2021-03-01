const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,300,50,50);
    box2 = new Box(500,300,50,50);
    box3 = new Box(500,300,50,50);
    box4 = new Box(500,300,50,50);
    box5 = new Box(500,300,50,50);
    box6 = new Box(600,300,50,50);
    box7 = new Box(600,300,50,50);
    box8 = new Box(600,300,50,50);
    box9 = new Box(600,300,50,50);
    box10 = new Box(600,300,50,50);
    ground = new Ground(500,height,1000,20)
    ball=Bodies.circle(400,200,20,{density:1,frictionAir:0.0005})
    World.add(world,ball);
    rope = new CHAIN(this.ball,{x:400,y:20})

}

function draw(){
    background("yellow");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ground.display();
    rope.display();
    fill("lime")
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}