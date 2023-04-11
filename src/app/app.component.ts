import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ballon } from './model/ballon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('monCanvas', { static: true }) myCanvas: ElementRef;
  canvas: HTMLCanvasElement;
  ctx: any;
  bal: Ballon;
  bals: Ballon[] = [];
  mouse = {
    x : undefined,
    y: undefined
  };



  ngOnInit(): void {
    this.canvas = this.myCanvas.nativeElement;
    this.canvas.style.backgroundColor = "aliceblue";
    this.ctx = this.canvas.getContext("2d");

    if (this.ctx) {
      window.addEventListener("resize",this.adapteWindow)         // redimensionnement de la canvas par rapport au viewport 
      window.addEventListener('mousemove',this.sourisEvent)
      this.adapteWindow();                                        
      // this.drawingRect(this.ctx);                              // dessinner un rectangle
      this.drawBall();                                         // dessiner un ballon
      // this.drawBalls(300);                                           // dessiner 100 ballon
      requestAnimationFrame(this.animate);                        // Commencer l'animation
    }

  }

  adapteWindow = () => {                    // flèché pour que "this" soit global
    this.canvas.height = window.innerHeight - 4;
    this.canvas.width = window.innerWidth;
  }

  drawingRect(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(20, 20, 100, 100);
  }

  drawBalls(nb) {
    for (let i = 0; i < nb; i++) {
      let x = Math.random() * this.canvas.width;
      let y = Math.random() * this.canvas.height;
      let dx = Math.random() ;
      let dy = Math.random() ;
      let r = Math.random() * 255;
      let g = Math.random() * 255;
      let b = Math.random() * 255;
      let rd = Math.random()* 3 + 2;
      const bal = new Ballon(x, y, dx, dy, rd, 'rgb(' + r + ',' + g + ',' + b + ')', this.mouse);
      bal.drawBall(this.ctx);
      this.bals.push(bal);
    }
  }

  drawBall() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let dx = Math.random() * 5;
    let dy = Math.random() * 5;
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    // this.bal = new Ballon(x, y, dx, dy, 10, 'rgb(' + r + ',' + g + ',' + b + ')', this.mouse);
    // this.bal.drawBall(this.ctx);

    // dessiner un ballon (test gravity)
    this.bal = new Ballon(720, 350, 0, 5, 30, 'rgb(' + r + ',' + g + ',' + b + ')', this.mouse);
    this.bal.drawBall(this.ctx);

  }


  // evenement de la souris
  sourisEvent = (event) => {      // fléché pour que "this" soit global 
    this.mouse.x = event.x;
    this.mouse.y = event.y;
  }
  
 

  animate = () => {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);  // ts atao anaty update satria raha mamafa daholo izy rehetra dia iray iany no hita
    
    // animer un balon => activer drawBalls() (dans ngOnInit)
      this.bal.updateBall(this.ctx);


    // //animer des ballons => activer drawBalls() (dans ngOnInit)
    // for (let i = 0; i < this.bals.length; i++) {
    //   this.bals[i].updateBall(this.ctx);
    // }

    // Boucler l'animation
    requestAnimationFrame(this.animate);
  }

}
