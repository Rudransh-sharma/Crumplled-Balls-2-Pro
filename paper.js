class Paper {
    constructor(x, y , r , angle ) {
      var options = {
          'restitution':0.3,
          'isStatic':false,
          'friction':0.5,
          'density':1.2
      }
      this.x = x ;
      this.y = y ; 
      this.r = r ;
      
      this.body = Bodies.circle(this.x, this.y , this.r/2 ,  options);
     this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle  =this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      rectMode(CENTER);
      strokeWeight(4);
      fill(255);
      strokeWeight(10)
      stroke('white')
      imageMode(CENTER)
      image(this.image, 0, -30, this.width, this.height);

      pop();
    }
  };
  