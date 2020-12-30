class Box{
    constructor(x, y, width, height) {
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("box.png");
        World.add(world, this.body);
        this.visibilty=255;
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("black");
        image(this.image,0, 0, this.width, this.height);
        pop();
        }

        else{
          World.remove(world,this.body);
          push();
          this.visibilty=this.visibilty-5;
          tint(255, this.visibilty);

          image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
          pop();
        }
      }

      score(){
        if(this.visibilty<0 && this.visibilty>-105){
          score=score+1;
        }
      }
}
