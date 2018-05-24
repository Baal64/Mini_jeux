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
        };/*
        switch(e.keyCode){
            case 38:
           // case 90: // Haut
            this.up = true;
            break;
            case 39:
          //  case 68: // Droit 
            this.right = true;
            break;
            case 37:
           // case 81: // Gauche
            this.left = true;
            break;
            case 40:
          //  case 83: // Bas
            this.down = true;
            break;
         };
        switch(this.left, this.up, this.right, this.down) {
            case this.up == true:this.y -= 10;
            break;
            case this.down == true:this.y +=10;
            break;
            case this.left == true:this.x -= 10;
            break;
            case this.right == true:this.x +=10;
            break;
            case this.up== true && this.left == true: this.y -= 10, this.x -= 10;
            break;
            case this.up== true && this.right == true: this.y -= 10, this.x += 10;
            break;
            case this.down== true && this.left == true: this.y += 10, this.x -= 10;
            break;
            case this.down== true && this.right == true: this.y += 10, this.x += 10;
            break;
        }*/
    };
    
};


