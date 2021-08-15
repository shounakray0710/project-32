class Ball {
    constructor(x, y, r) 

    {
        var ball_options={
             density: 0.001
        };
        
        this.ball = Bodies.circle(x,y,r,ball_options)
      this.r = r;
        World.add(world, this.ball);
      }
    
      show() {
        let pos = this.ball.position;
        push();
        ellipseMode(RADIUS);
        noStroke();
        fill(148,127,146);
        ellipse(pos.x,pos.y,this.r,this.r)
        pop();
      }
    }
    
