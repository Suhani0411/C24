const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
//user created


var engine,world;
//proper physics engine

var Box1,Box2,Pig1,Log1,Box3,Box4,Pig2,Log3,Box5,Log4,Log5,Bird1,Ground1;

function setup() {

 var canvas= createCanvas(1200,400);
    engine=Engine.create();
    world= engine.world;
    Ground1=new Ground(600,height,1200,20); 
    
    Box1=new Box(700,320,70,70);
    Box2=new Box(920,320,70,70);
    Pig1=new Pig(810,350);    
    Log1=new Log(810,260,300,PI/2);
    
    Box3=new Box(700,240,70,70);
    Box4=new Box(920,240,70,70);
    Pig2=new Pig(810,220);
    
    Log3=new Log(810,180,300,PI/2);
    
    Box5=new Box(810,160,70,70);
    
    Log4=new Log(760,120,150,PI/7);
    Log5=new Log(870,120,70,  -PI/7);
    
    Bird1=new Bird(100,100);
  
   
      
}

function draw() {
  background("black");  
  
  Engine.update(engine);

  Ground1.display();
  Box1.display();                                                                                           
  Box2.display();
  Pig1.display();
  Log1.display();
  Box3.display();
  Box4.display();
  Pig2.display();
  Log3.display();
  Box5.display();
  Log4.display();
  Log5.display();
  Bird1.display();
 

  

  drawSprites();

}







