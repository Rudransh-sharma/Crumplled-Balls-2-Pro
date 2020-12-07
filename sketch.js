
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground , ball , dustbin ; 
var paper  , w1 , w2 , w3;
function preload(){


} 
function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600 , 800 , 160000 , 50 )

paper = new Paper( 190, 700 , 70 ,50)
dustbin = new Dustbin(1200 , 70 , 300 , 350)

w1 = new Walls(1065 , 700 , 10 , 400)
w2 = new Walls (1330 , 700 , 10 , 400)
w3 = new Walls(1200 , 800 , 300 , 10)
Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
 
ground.display();
dustbin.display();
paper.display();
w1.display();
w2.display();
drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:300 , y: -300});
	
	}
	}

