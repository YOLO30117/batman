const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxdrops=100
var drops =[]
function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    if(frameCount%150===0){
        for(var i=0;i<maxdrops;i++){
            drops.push(new drop(random(0,400),random(0,400)));
        }
    }
}

function draw(){
    background("black");
    for(var i=0;i<maxdrops;i++){
        drops[i].showDrop()
        drops[i].updateRain()
    }
    Engine.update(engine);
}   

