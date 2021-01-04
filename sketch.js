var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
 
var particles = [];
var plinkos = [];
var score = 0;
var ground;
var particle;
var divisionHeight=300;
var turn = 0;
var count = 0;
var divisions= [];
var gameState ="start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",75,650);
  text("500",150,650);
  text("500",225,650);
  text("500",300,650);
  text("100",375,650);
  text("100",450,650);
  text("100",525,650);
  text("200",600,650);
  text("200",675,650);
  text("200",750,650);
  Engine.update(engine);
 
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x>300){
         score=score+500;
         turn++
         particle=null;
         if(count>=5){
           gameState="end";
         }
       }
     }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300 && particle.body.position.x>600){
        score=score+100;
        turn++
        particle=null;
        if(count>=5){
          gameState="end";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<600 && particle.body.position.x>900){
        score=score+200;
        turn++
        particle=null;
        if(count>=5){
          gameState=end;
        }
      }
    }
  }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}