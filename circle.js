export class Circle {

constructor(x, y, radius, ctx){
  
  this.x = x;
  this.y = y;
  this.dx = (Math.random() - 0.5) * 1; //velocity
  this.dy = (Math.random() - 0.5) * 1; //velocity
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

  update(){
    if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }

    if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
      }

    this.x += this.dx;
    this.y += this.dy;
    
     this.draw(); 
  }


}
