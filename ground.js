class GROUND{
    constructor(){
    
         var options={
            isStatic:true

        }

        this.body = Bodies.rectangle(400,650,800,10,options);
        this.width = 800;
        this.height = 10;

    World.add(world,this.body);
    
    }
    
    display(){
        var shoc = this.body.position

        rectMode(CENTER);
        fill("orange");
        rect(shoc.x,shoc.y,this.width,this.height);
        
    }
    
    
    }