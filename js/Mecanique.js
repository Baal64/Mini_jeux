class Mecanique {

    constructor() {
        this.canvas = new Canvas();
        this.plateau = new Plateau("img/plateau.jpg", this.canvas.context);
        this.peach = new Peach("img/Peach.png", this.canvas.context);
        this.heros = new Heros("img/Yoshi.png", this.canvas.context);
        this.bombs = [];
        this.creaBombes();
        this.musicTheme = new Audio("media/MarioTheme.mp3");
        this.musicTheme.loop = true;
        this.musicTheme.play();
    }

    update() {
        this.canvas.context.clearRect(0, 0, this.l, this.h);
        this.plateau.dessinePlateau();
        this.dessinebombs();
        this.peach.dessineHuma();
        this.heros.dessineHuma();
        this.collisions();
        this.collisionsBombs();
    }

    collisions() {
        if (this.peach.x - 16 <= this.heros.x &&
            this.heros.x <= this.peach.x + 16 &&
            this.peach.y - 32 <= this.heros.y &&
            this.heros.y <= this.peach.y + 16) {
            this.heros.initMove();
            console.log("Gagné!");
        }
    }

    collisionsBombs() {
        for (let i = 0; i < this.bombs.length; i++) {
            if (this.bombs[i].x - 20 <= this.heros.x &&
                this.heros.x <= this.bombs[i].x + 20 &&
                this.bombs[i].y - 20 <= this.heros.y &&
                this.heros.y <= this.bombs[i].y + 20) {
                this.heros.initMove();
                console.log("perdu!");

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
}