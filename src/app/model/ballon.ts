export class Ballon {
    centerX: number;
    centerY: number;
    dx: number;
    dy: number;
    rayon: number;
    couleur: string;
    souris: { x, y };
    maxR = 30;
    minR = 5;

    constructor(x: number, y: number, dx: number, dy: number, r: number, clr: string, srs) {
        this.centerX = x;
        this.centerY = y;
        this.dx = dx;
        this.dy = dy;
        this.rayon = r;
        this.minR = r;
        this.couleur = clr;
        this.souris = srs;
    }

    drawBall(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = this.couleur;
        ctx.arc(this.centerX, this.centerY, this.rayon, 0, Math.PI * 2);
        ctx.fill();
    }

    updateBall(ctx: CanvasRenderingContext2D) {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        if (this.centerX + this.rayon > window.innerWidth || this.centerX - this.rayon < 0) {
            this.dx = -this.dx;
            this.couleur = 'rgb(' + r + ',' + g + ',' + b + ')';
        }
        if (this.centerY + this.rayon > window.innerHeight || this.centerY - this.rayon < 0) {
            this.dy = -this.dy;
            this.couleur = 'rgb(' + r + ',' + g + ',' + b + ')';
        }
        this.centerX += this.dx;
        this.centerY += this.dy;

        // enteraction avec la souris
        let x = this.centerX - this.souris.x;
        let y = this.centerY - this.souris.y;
        let marge = 100;
        if ((x >= -(marge) && x <= marge )
           &&(y >= -(marge) && y <= marge )) {
            if(this.rayon < this.maxR){
                this.rayon += 1.5;
            }
        }  else {
            if(this.rayon > this.minR){
                this.rayon -= 1.5;
            }
        }

        this.drawBall(ctx);    // avec les nouvelles valeurs de X,Y et couleur
    }

}
