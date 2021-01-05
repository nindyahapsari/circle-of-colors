import {Circle} from "./circle.js";


class App {
    constructor(){
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');



    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.circleArr = [];

    for(let i=0; i < 100; i++){
      this.x = Math.random() * window.innerWidth; 
      this.y = Math.random() * window.innerHeight;
      this.radius = 30;
        this.circleArr.push(new Circle(this.x, this.y, this.radius, this.ctx));
      }
      console.log("circleArr: ", this.circleArr);

}

 resize(){
  
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  

    window.requestAnimationFrame(this.animate.bind(this));
  
    //this.circle = new Circle(this.x, this.y, this.radius, this.ctx);

}


  animate(){
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    console.log('this is animation!');


    for(let c=0; c < this.circleArr.length; c++){
        this.circleArr[c].update();
    }



        } 


        

  }





  window.onload = () => {
    new App();

  }