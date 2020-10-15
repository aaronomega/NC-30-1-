const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var bg = "sprites/bg.png";
var gameState = "onSling";

function preload() {
  //  change_bg_img();
  
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,400,12000,40);
   

    box1 = new Box(700,280,20,40);
    box3 = new Box(700,220,20,40);

    box2 = new Box(920,280,20,40);
    box4 = new Box(920,220,20,40);
    
    

    box7 = new Box(730,220,20,40);
    box8 = new Box(730,280,20,40);

    box9 = new Box(760,280,20,40);
    box10 = new Box(760,220,20,40);
    
    box11 = new Box(790,280,20,40);
    box12= new Box(790,220,20,40);
    
    box5 = new Box(810,220,20,40);
    box6 = new Box(810,280,20,40);
    

    

    box13 = new Box(670,220,20,40);
box15 = new Box(670,280,20,40);

    box14 = new Box(940,220,20,40);
box16 = new Box(940,280,20,40);
    

    

    box17 = new Box(840,280,20,40);
    box18 = new Box(840,220,20,40);

    box19 = new Box(870,280,20,40);
    box20 = new Box(870,220,20,40);

    box21 = new Box(900,280,20,40);
    box22 = new Box(900,220,20,40);

    box23 = new Box(930,280,20,40);
    box24= new Box(930,220,20,40);
    

    stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:200, y:300});
}

function draw(){
    
    background(255 );
        
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    stone.display();
    
    //log6.display();
    slingshot.display();  
   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
        gameState = "onSling";
    }
}

