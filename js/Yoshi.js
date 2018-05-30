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
    };

    commande() {
        let yoyo = this;// La modification du "this" en "let yoyo" permet le fonctionnement de "direct"dans la foncion       
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

    // bruitsDePas(a) {
    //     removeEventListener("keydown", function (a) {
    //         this.bruitsDePas(a);
    //     });
    //     let audio = new Audio("media/Pas.wav");
    //     audio.play();
    //     this.lance();
    // }

    // lance(a) {
    //     removeEventListener("keydown", function (a) {
    //         mecanique.yoshi.lance(a);
    //     });
    //     let audio = new Audio("media/Pas.wav");
    //     audio.play();
    // };

    // arret(a) {
    //     this.setTimout(this.suite(), 1000);
    // };

    // suite() {
    //     addEventListener("keydown", function (a) {
    //         mecanique.yoshi.lance(a);
    //     });
    // }

};