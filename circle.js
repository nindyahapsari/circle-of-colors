export class Circle {

constructor(x, y, radius, ctx){
  
  this.x = x;
  this.y = y;
  this.dx = (Math.random() - 0.5) * 0.5; //velocity
  this.dy = (Math.random() - 0.5) * 0.5; //velocity
  this.ctx = ctx;
;
  this.radius = Math.random() * 40 + 1;
  this.maxRadius = 60;
  this.minRadius = this.radius;

  this.colorArray = ['#FBF46E', '#9DDB7B', '#4DBA8B', '#05948E', '#1C6D7C', '#2F4858']
  this.circleColors = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];




}

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.circleColors
    this.ctx.fill();
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
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 & mouse.y - this.y < 50 && mouse.y - this.y > -50 ){

        if(this.radius < this.maxRadius){
          this.radius += 1;
          }
    } else if (this.radius > this.minRadius){    
        this.radius -= 1;
      }
    
    
     this.draw(); 
  }


}
