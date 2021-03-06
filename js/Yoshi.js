class Yoshi extends Humanoide {

    constructor(source, canvas) {
        super(source, canvas);
        this.l = 16;
        this.h = 32;
        this.pas = 4;
        this.direct =  {
            up : false,
            down : false,
            right : false,
            left : false
        };
        this.commande();
        this.bruitPas();
        // this.inter = {
        //     keydown : false
        // }
    };

    commande() {
        let yoyo = this;// La modification du "this" en "let yoyo" à cause du changement de contexte     
        window.addEventListener("keydown", function(e) {
            if (e.keyCode == 37) {
                yoyo.direct.left = true;
            }
            if (e.keyCode == 38) { //up
                yoyo.direct.up = true;
            }
            if (e.keyCode == 39) { //right
                yoyo.direct.right = true;
            }
            if (e.keyCode == 40) { //down
                yoyo.direct.down = true;
            }
        }, false);

        window.addEventListener("keyup", function(e) {
            if (e.keyCode == 37) {
                yoyo.direct.left = false;
            }
            if (e.keyCode == 38) { //up
                yoyo.direct.up = false;
            }
            if (e.keyCode == 39) { //right
                yoyo.direct.right = false;
            }
            if (e.keyCode == 40) { //down
                yoyo.direct.down = false;
            }
        });
        
    };

    deplacement() {
        let fenetre = (window.innerHeight);
        let h = fenetre-82;
        let l = fenetre-66;

        if (this.direct.up) {
            if (this.y <= 0) {
                this.y = h;
                console.log("1")
            } else {
                this.y -= this.pas;
            }
        }
        if (this.direct.down) {
            if (this.y >= h) {
                this.y = 0;
                console.log("2")
            } else {
                this.y += this.pas;
            }
        }
        if (this.direct.left) {
            if (this.x <= 0) {
                this.x = l;
                console.log("3")
            } else {
                this.x -= this.pas;
            }
        }
        if (this.direct.right) {
            if (this.x >= l) {
                this.x = 0;
                console.log("4")
            } else {
                this.x += this.pas;
            }
        }
    };

    bruitPas(){
        let audio = new Audio("media/pas.wav");  
        audio.volume = 0.4;
        window.addEventListener("keydown", function(a) { 
            if (a.keyCode == 37||38||39||40) {             
                a.preventDefault();
                audio.play();  
            }
        });
    }
};