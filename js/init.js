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

// yoshi.bruitsDePas();