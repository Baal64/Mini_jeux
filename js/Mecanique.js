class Mecanique {

    constructor() {
        this.canvas = new Canvas();
        this.plateau = new Plateau("img/plateau.jpg", this.canvas.context);
        this.peach = new Peach("img/Peach.png", this.canvas.context);
        this.yoshi = new Yoshi("img/Yoshi.png", this.canvas.context);
        this.bombs = [];
        this.creaBombes();
        this.musicTheme = new Audio("media/yoshi's island.mp3");
        this.musicTheme.loop = true;
        this.musicTheme.volume = 0.5;
        this.musicTheme.play();
        this.audioVictoire = new Audio("media/peach14.wav");
        this.audioDefaite = new Audio("media/yoshi09.wav");
        // this.colA = false;
        // this.colB = false; 
    }

    update() {
        this.canvas.context.clearRect(0, 0, this.l, this.h);
        this.yoshi.deplacement();
        this.plateau.dessinePlateau();
        this.dessinebombs();
        this.peach.dessineHuma();
        this.yoshi.dessineHuma();
        this.collisions();
        this.collisionsBombs();
        // this.colTest();
    }

    collisions() {
        // Let reussi=
        if (this.peach.x - 16 <= this.yoshi.x &&
            this.yoshi.x <= this.peach.x + 16 &&
            this.peach.y - 32 <= this.yoshi.y &&
            this.yoshi.y <= this.peach.y + 16) {
            // this.yoshi.initMove();
            this.audioVictoire.play();
            //passer au niveau 2, + score incrémenté +=10, + bombes +=1
        }
    }

    collisionsBombs() {
        for (let i = 0; i < this.bombs.length; i++) {
            if (this.bombs[i].x - 20 <= this.yoshi.x &&
                this.yoshi.x <= this.bombs[i].x + 20 &&
                this.bombs[i].y - 20 <= this.yoshi.y &&
                this.yoshi.y <= this.bombs[i].y + 20) {
                // this.yoshi.initMove();
                this.audioDefaite.play();
            }
        }
    }

    creaBombes() {
        this.bombs = [];
        for (let i = 0; i < 10; i++) {
            this.bombe = new Bombes("img/bomb.png", this.canvas.context);
            this.bombs.push(this.bombe);
        }
        return this.bombs;
    }

    dessinebombs() {
        for (let i = 0; i < this.bombs.length; i++) {
            this.bombs[i].dessineHuma();
        };
    }

    // colTest(){
    //     if(this.colA){
    //         // this.update.stopPropagation();
    //         console.log("Gagné!");
    //     }
    //     if(this.colB){
    //         // this.update.stopPropagation();
    //         console.log("perdu!");
    //     }
    // }
}