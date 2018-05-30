class Canvas {
    constructor() {
        this.h = (window.innerHeight - 50);
        this.l = this.h;
        this.dessineCanvas();
    }
    //dessiner canvas dans dom
    dessineCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.style = "margin: auto"
        this.canvas.width = this.l;
        this.canvas.height = this.h;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
    }
}