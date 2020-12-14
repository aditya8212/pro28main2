class MANGO{
constructor(x,y){

     var options={
        isStatic:true,
        restitution:0,
        friction:1
    }

    this.body = Bodies.circle(x,y,20,options);
    this.body.position.x = x;
    this.body.position.y = y;
    this.radius =  50;
    this.image = loadImage("mango.png");

    World.add(world,this.body);

}

display(){
    var zam = this.body.position;

    imageMode(CENTER);
    image(this.image,zam.x,zam.y,this.radius,this.radius);
    
}

}