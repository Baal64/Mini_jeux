
var mecanique = new Mecanique(); 

function lancement(){
    mecanique.update();
    requestAnimationFrame(lancement);  
}

lancement();

addEventListener("keydown", function(e){
    mecanique.heros.deplacement(e);//(e.keycode, true)
})




