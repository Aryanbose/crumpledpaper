class Dustbin{
    constructor(x,y,width,heigth){
        var option ={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x,y,width,heigth,option);
        this.width = width;
        this.heigth = heigth;
        World.add(world,this.body)
    }
display(){

rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.width,this.heigth);
}
}