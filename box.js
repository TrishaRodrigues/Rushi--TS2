class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
      
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color = color(random(0,255), random(0,255), random(0,255))
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(this.color);


    if(this.body.speed < 3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rect(0, 0, this.width, this.height);

      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
      
       pop();
     }


   // push();

    //translate(this.body.position.x, this.body.position.y);

//    pop();
  }
};