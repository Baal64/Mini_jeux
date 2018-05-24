class Heros extends Humanoide{

    constructor(source, canvas){
        super(source, canvas);
        this.l=32;
        this.h=32;
    };

    deplacement(e){
        console.log(e.keyCode);
        switch(e.keyCode){
            case 38:
            case 90: // Haut
            this.y -= 10;
            break;
            case 39:
            case 68: // Droit 
            this.x += 10;
            break;
            case 37:
            case 81: // Gauche
            this.x -= 10;
            break;
            case 40:
            case 83: // Bas
            this.y += 10;
            break;
        };
    };
    
};


