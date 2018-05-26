class Humanoide {

    constructor(src, canvas, x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.img = new Image();
        this.img.onload = () => {
            this.pret = true;
            this.nouvellePosition();
            this.dessineHuma();
        };
        this.img.src = src;
    }
    dessineHuma() {
        this.canvas.drawImage(this.img, this.x, this.y);
    }

    nouvellePosition() {
        let xh = Math.ceil(Math.random() * (750 - 32));
        let yh = Math.ceil(Math.random() * (600 - 32));
        this.x = xh;
        this.y = yh;
    }

}