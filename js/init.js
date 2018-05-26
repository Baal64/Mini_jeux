var mecanique = new Mecanique();

function lancement() {
    mecanique.update();
    requestAnimationFrame(lancement);
};
lancement();

addEventListener("keydown", function (e) {
    mecanique.heros.avance(e);
});

addEventListener("keyup", function (e) {
    mecanique.heros.arret(e);
});
/*
addEventListener("playing", function(a){
    mecaniques.heros.bruitsDePas(a);
});*/