class Canvas{
    constructor(){       
        this.l = window.innerWidth - 50;
        this.h = window.innerHeight - 50;
        this.dessineCanvas();
    }
    //dessiner canvas dans dom
    dessineCanvas(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.l;
        this.canvas.height = this.h;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
    }
}
