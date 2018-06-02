class Yoshi extends Humanoide {

    constructor(source, canvas) {
        super(source, canvas);
        this.l = 32;
        this.h = 32;
        this.pas = 4;
        this.direct =  {
            up : false,
            down : false,
            right : false,
            left : false
        };
        this.commande();
        this.test();
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

    //Ajoute le pas à la direction
    deplacement() {
        if (this.direct.up) {
            this.y -= this.pas;
        }
        if (this.direct.down) {
            this.y += this.pas;
        }
        if (this.direct.left) {
            this.x -= this.pas;
        }
        if (this.direct.right) {
            this.x += this.pas;
        }

    };

    test(){
        let yoyo = this;// La modification du "this" en "let yoyo" à cause du changement de contexte     
        let audio = new Audio("media/pas.wav");
        window.addEventListener("keydown", function(a) {
            if (a.keyCode == 37||38||39||40) {
                audio.play();
                a.preventDefault();
              //  yoyo.inter = true;
            }
        });
 
        // window.addEventListener("keyup", function(a) {
        //     if (a.keyCode == 37||38||39||40) {
        //        // yoyo.inter  = false;
        //         audio.pause();
        //     }
        // });
    }     
};