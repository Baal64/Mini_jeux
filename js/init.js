this.head = document.createElement('header');
this.titreH1 = document.createElement('h1');
this.nodeH1 = document.createTextNode("Yoshi saves the queen!");

this.bodyB = document.body.appendChild(head);
this.head.appendChild(titreH1);
this.titreH1.appendChild(nodeH1);

var mecanique = new Mecanique();

function lancement() {
    mecanique.update();
    requestAnimationFrame(lancement);
};
lancement();

// addEventListener("keydown", function (e) {
//     mecanique.yoshi.avance(e);
// });

// addEventListener("keyup", function (e) {
//     mecanique.yoshi.arret(e);
// });

// addEventListener("keydown", function (a) {
//     mecanique.yoshi.lance(a);
// });

// addEventListener("keyup", function (a) {
//     mecanique.yoshi.arret(a);
// });