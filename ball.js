class Ball {
    constructor(x,y,r){
      var options = {
          isStatic:false

      } 
      this.body = Bodies.circle(x,y,r,options)
      World.add(world,this.body)
      this.radius = r

    }
    show(){
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        if (keyIsDown(RIGHT_ARROW)){
          this.body.position.y -=20
         }
        
        //if (this.body isTouching(Bricks) ){
        // brick1.position.x+=1
        // }
    }
}
