class Particle{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restituition:0.5
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
        this.x = x;
        this.y = y;
        this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
        


    }
    display(){
        /*for(var i = 10;i<this.trajectory.length;i=i+10){
            body(this.body,this.trajectory[i][400],this.trajectory[i][1]);
          }*/
        
        var pos=this.body.position;
        push();
        fill(this.color);
        translate(pos.x, pos.y);
        //rotate(angle);
        circle(0,0, this.r );
        pop();
    }


}