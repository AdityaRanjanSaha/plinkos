class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true,
            friction:0,
            restituition:1
        }
        this.r = 10;
        this.body = Bodies.circle(x, y,this.r, options);     
        this.x = x;
        this.y = y;
        World.add(world, this.body);
      
    }
    display(){
        /*for(var i = 10;i<this.trajectory.length;i=i+10){
            body(this.body,this.trajectory[i][400],this.trajectory[i][1]);
          }*/
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("white");
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0,0, this.r );
        pop();
    }


}