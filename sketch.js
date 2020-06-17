const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(650,300,70,70);
    box2 = new Box(900,300,70,70);
    box3 = new Box(650,200,70,70);
    box4 = new Box(900,200,70,70);
    box5 = new Box(770,100,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(770,300)
    pig2 = new pig(770,200)
    log1 = new log(770,250,350,PI/2)
    log2 = new log(770,150,350,PI/2)
    log3 = new log(710,50,150,PI/7)
    log4 = new log(830,50,150,-PI/7)
    bird1 = new bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig2.display();
    pig1.display();
    log1.display();
    log2.display();
  log3.display();
  log4.display();
  bird1.display();
}