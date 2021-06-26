const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,hammer1,stone,stone1;
var plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(400,500,25,250);
    stone1 = new Stone(50,654,63,63);
    rubber = new Rubber(900,450,70);                                                                                                      
    hammer1 = new Hammer(30,300);                                                                                                                                       
                                                                                                                                   

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    hammer1.display();
    stone.display();
    stone1.display();
    rubber.display(); 
}