import {Circle} from "./circle.js";



class App {
    constructor(){
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    

    this.mouse = { x: undefined, y: undefined}  
    

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.circleArr = [];

    for(let i=0; i < 100; i++){
      this.radius = 30;
      this.x = Math.random() * (window.innerWidth - this.radius * 2) + this.radius; 
      this.y = Math.random() * (window.innerHeight - this.radius * 2) + this.radius;
        this.circleArr.push(new Circle(this.x, this.y, this.radius, this.ctx));
      }
      console.log("circleArr: ", this.circleArr);
<<<<<<< HEAD
  
    window.addEventListener("mousemove", this.movement.bind(this), false);
=======


      window.addEventListener('mousemove', this.mouseMovement.bind(this), false);
>>>>>>> 0d0e4c53ee0805bff5b8c84e35ad7312fa19199c
}


  movement(event) {
  
  console.log("mousemove event: ", event);
  }

 resize(){
  
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  

    window.requestAnimationFrame(this.animate.bind(this));
  
    //this.circle = new Circle(this.x, this.y, this.radius, this.ctx);

}


mouseMovement(e){
  this.mouse.x = e.x;
  this.mouse.y = e.y;
  //console.log(this.mouse);

}


  animate(){
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //console.log('this is animation!');


    for(let c=0; c < this.circleArr.length; c++){
        this.circleArr[c].update(this.mouse);
    }



        } 


        

  }





  window.onload = () => {
    new App();

  }
