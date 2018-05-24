class Mecanique{

    constructor(){
        this.canvas  = new Canvas ();
        this.plateau = new Plateau ("img/CastleExample_3.png", this.canvas.context);
        this.monstre = new Monstre ("img/monster.png", this.canvas.context);
        this.heros   = new Heros ("img/hero.png", this.canvas.context);
        this.bombs = [];
        console.log(this.bombs);
        this.creaBombes();
    }

    update(){
        this.canvas.context.clearRect(0, 0, this.l, this.h);
        this.plateau.dessinePlateau();
       // this.bombe.dessineHuma();
        this.monstre.dessineHuma();
        this.heros.dessineHuma();
        this.collisions();
    }

    collisions(){
        if (this.monstre.x-32<=this.heros.x &&
            this.heros.x<=this.monstre.x+32 &&
            this.monstre.y-32<=this.heros.y &&
            this.heros.y<=this.monstre.y+32){
                console.log("Gagné!");
        }
        //Penser à une boucle pour la colision avec les bombes
        else if (this.bombe.x-32<=this.heros.x &&
            this.heros.x<=this.bombe.x+32 &&
            this.bombe.y-32<=this.heros.y &&
            this.heros.y<=this.bombe.y+32){
                console.log("perdu!");
        }
    }
    
    creaBombes(){
        this.bombs = [];
        this.bombe = new Bombes ("img/bomb.png", this.canvas.context);
        for(let i=0; i<10; i++){
            this.bombs.push(this.bombe);
        }
        return this.bombs;
    }
}
