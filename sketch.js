const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var polygon;
var engine,world;
var ground;
var stand1,stand2;
var launcher;
var score=0;
var bg;

//big pyramid
var block1;
var block2,block3,block4;
var block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;

//small pyramid
var block17;
var block18,block19,block20;
var block21,block23,block23,block24,block25;

function preload(){
    getBackgroundImage();
}

function setup(){
    createCanvas(1400,650);
    engine=Engine.create();
    world=engine.world;

    //ground and polygon
    ground= new Ground(700,630,1400,20);
    polygon= new Polygon(100,600,50,50);
    launcher= new Launcher(polygon.body,{x:150,y:450})

    //big pyramid
    //first row
    stand1= new Stand(600,550,390,20);
    block1= new Box(605,370,50,65)

    //second row
    block2=new Box(560,420,50,65);
    block3=new Box(605,420,50,65);
    block4=new Box(645,420,50,65);
    
    //third row
    block5=new Box(525,475,50,65);
    block6=new Box(565,475,50,65);
    block7=new Box(605,475,50,65);
    block8=new Box(645,475,50,65);
    block9=new Box(685,475,50,65);

    //last row
    block10=new Box(480,515,50,65);
    block11=new Box(530,515,50,65);
    block12=new Box(570,515,50,65);
    block13=new Box(610,515,50,65);
    block14=new Box(650,515,50,65);
    block15=new Box(690,515,50,65);
    block16=new Box(730,515,50,65);


    //small pyramid
    //first row
    stand2= new Stand(1100,300,290,20);
    block17= new Box(1100,165,50,65);

    // second row
    block18= new Box(1060,215,50,65);
    block19= new Box(1100,215,50,65);
    block20= new Box(1140,215,50,65);

    //last row
    block21= new Box(1020,265,50,65);
    block22= new Box(1060,265,50,65);
    block23= new Box(1100,265,50,65);
    block24= new Box(1140,265,50,65);
    block25= new Box(1180,265,50,65);

}

function draw(){
    if(bg)
    background(bg);
    Engine.update(engine);

    textSize(20);
    stroke(255);
    text("Score  "+score,1200,100);

    if(keyDown("space")){
        launcher.attach(polygon.body);
    }

    //ground and polygon
    ground.display();
    polygon.display();
    launcher.display();

    //big pyramid
    //first row
    stand1.display();
    block1.display();
    block1.score();

    //second row
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();

    //third row
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();

    //last row
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    
    
    // small pyramid
    //first row
    stand2.display();
    block17.display();
    block17.score();

    //second row
    block18.display();
    block18.score();
    block19.display();
    block19.score();
    block20.display();
    block20.score();

    //last row
    block21.display();
    block21.score();
    block22.display();
    block22.score();
    block23.display();
    block23.score();
    block24.display();
    block24.score();
    block25.display();
    block25.score();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly(polygon.body);
}

async function getBackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON= await response.json();
    var datetime= responseJSON.datetime;
    var hour= datetime.slice(11,13);

    if(hour>=06 && hour<19){
        bg=loadImage("bg1.png");
    }

    else{
        bg=loadImage("bg2.png");
    }
}

