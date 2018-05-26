class Plateau{
    constructor(src, canvas, x = 0, y = 0){
        this.x = x;
        this.y = y;
        this.h = (window.innerHeight - 20);
        this.l = this.h;
        this.canvas = canvas;
        this.img = new Image();
        this.img.onload = () => {
            this.pret = true;
            this.dessinePlateau();
        };
        this.img.src = src;
    }

    dessinePlateau(){
        this.canvas.drawImage(this.img, this.x, this.y, this.l, this.h);
    }
}
