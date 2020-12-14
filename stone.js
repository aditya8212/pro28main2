class STONE{
constructor(){

   var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2

    }

    this.stone = Bodies.circle(100,510,50,options);
    this.radius = 50;

    this.image = loadImage("stone.png");
    World.add(world,this.stone);

}

display(){
    var ha =  this.stone.position

    imageMode(CENTER);
    image(this.image,ha.x,ha.y,this.radius,this.radius);

}
}