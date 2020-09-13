class Box {

    constructor(x,y,width,height){
 
        var options={
        isStatic=true
        }

        //making body in world
        this.body=Bodies.rectangle(x,y,width,height,options);

        //anitializing the width
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
display(){

    
}


}