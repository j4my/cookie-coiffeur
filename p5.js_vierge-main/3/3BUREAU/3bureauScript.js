function preload() {
  fond   = loadImage("entree.png")
  retour = loadImage("../../fleche.png")
}

function setup() {
  createCanvas(1500, 1800)
}

function draw() {
  image(fond, 0, 0, 1500, windowHeight)
  image(retour, -60, -75)

  if (mouseX > 62 && mouseX < 345 && mouseY > 253 && mouseY < 793) {
  cursor(CROSS)
  }else{
    cursor(ARROW)
  }
}

function mousePressed() {
    if (mouseX > 32 && mouseX < 240 && mouseY > 34 && mouseY < 220) {
    console.log("fleche cliquée")
    window.location.href = "../../2/2BARBER/2barber.html"
    return
  }

  if (mouseX > 62 && mouseX < 345 && mouseY > 253 && mouseY < 793) {
    console.log("porte cliquée")
    window.location.href = "../3SALLEATTENTE/3salle.html"
  }
}