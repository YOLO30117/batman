class drop{
    constructor(x,y){
        var options ={
            friction : 0.001,
            restitution : 0.1  
        }
        this.rain = Bodies.circle(x,y,5,options)
        World.add(world,this.rain)
    }
    showDrop(){
        fill("blue")
        ellipse(this.rain.position.x,this.rain.position.y,5,5)
    }
    updateRain(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
}
