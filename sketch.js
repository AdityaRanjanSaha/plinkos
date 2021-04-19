const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var score = 0;
var particles =[];
var plinkos=[];
var divisions=[];
var ground=[];



function setup() {
  var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(400,height,800,20);
  
  
 
    for(var i=0;i<=width;i=i+80){
    divisions.push(new Division(i,height-200,10,400))
}

 for(var j=75;j<=width;j=j+50){
 plinkos.push(new Plinko(j,75));
 }
 for(var j=50;j<=width;j=j+50){
  plinkos.push(new Plinko(j,175));
   }
  for(var j=75;j<=width;j=j+50){
  plinkos.push(new Plinko(j,275));
    }
  for(var j=50;j<=width;j=j+50){
  plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  for (var i = 0; i < plinkos.length; i++) 
  { plinkos[i].display(); }

  for (var j = 0; j < divisions.length; j++) 
  {divisions[j].display(); }

  for (var p = 0; p < divisions.length; p++) 
  {divisions[p].display(); }

if(frameCount%60===0)
{ particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); score++; }

for (var b = 0; b < particles.length; b++) 
{divisions[b].display(); }

}