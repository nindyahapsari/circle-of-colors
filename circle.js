export class Circle {

constructor(x, y, radius, ctx){
  
  this.x = x;
  this.y = y;
<<<<<<< HEAD
  this.dx = (Math.random() - 0.5) * 1; //velocity
  this.dy = (Math.random() - 0.5) * 1; //velocity
=======
  this.dx = (Math.random() - 0.5) * 0.5; //velocity
  this.dy = (Math.random() - 0.5) * 0.5; //velocity
>>>>>>> 0d0e4c53ee0805bff5b8c84e35ad7312fa19199c
  this.ctx = ctx;
;
  this.radius = radius;


}

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = 'blue';
    this.ctx.stroke();
}

  update(mouse){
    if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }

    if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
      }

    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    //this is the meassurement between the mouse coordinate and the circle, which is from the middle of the circle
    if(mouse.x - this.x < 20 && mouse.x - this.x > -20 && mouse.y - this.y < 20 && mouse.y - this.y > -20 ){
       this.radius += 1;
    }    
    //youtube video stops at 8:46
    
     this.draw(); 
  }


}
