class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        frictionAir: 0.005
    };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Superhero-01.png");
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      //fill("gold")
      //rotate(angle);
       image(this.image,0,0,this.width,this.height);
      //ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  