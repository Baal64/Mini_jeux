class Heros extends Humanoide {

    constructor(source, canvas) {
        super(source, canvas);
        this.l = 32;
        this.h = 32;
    };

    initMove() {
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;
    };

    avance(e) {
        switch (e.keyCode) {
            case 37:
                this.left = true;
                break;
            case 38:
                this.up = true;
                break;
            case 39:
                this.right = true;
                break;
            case 40:
                this.down = true;
                break;
        }
        this.deplacement();
    };

    arret(e) {
        switch (e.keyCode) {
            case 37:
                this.left = false;
                break;
            case 38:
                this.up = false;
                break;
            case 39:
                this.right = false;
                break;
            case 40:
                this.down = false;
                break;
        }
    };

    deplacement() {
        this.pas = 10;
        if (this.up) {
            this.y -= this.pas;
        }
        if (this.down) {
            this.y += this.pas;
        }
        if (this.left) {
            this.x -= this.pas;
        }
        if (this.right) {
            this.x += this.pas;
        }
        this.bruitsDePas();
    }

    bruitsDePas(a) {
        let audio = new Audio("media/Pas.wav");
/*  Essayer d'utiliser stopPropagation sur l'event  du déplacement tant que pas false!!!
        if (audio== false) {
            audio.play();
            console.log("go");
        } else if(audio== true){*/
            setInterval(audio.play(), 500);
            //audio.play().stopPropagation();
            console.log("hoho");
        //}
    }
};