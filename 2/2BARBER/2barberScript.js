function mousePressed() {
  if (showDialog == true) {
    showDialog = false
    return
  }
}
var fond
var imgCle

var showDialog = false
var dialogText = ""
var currentCharacter = 0
var pageMargin = 25

//Récupérer la valeur d'un cookie 
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

//obtenir une date d'expiration
function date(_jour) {
  let d = new Date();
  let days = _jour;
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  return d;
}

//savoir si le jeu a été lancé
function etat() {
  jeu = getCookie("jeux");
  if (!jeu) {
    let d = date(4);
    document.cookie = "jeux=" + 0 + ";path=/;expires=" + d + " ";
  } else if (jeu == "0") {
    return false;
  } else {
    return true;
  }
}

//lancer le jeu
function jouer() {
  let d = date(4);
  document.cookie = "jeux=" + 1 + ";path=/;expires=" + d + " ";
}

function preload() {
  fond = loadImage("barber.png")
  retour = loadImage("../../fleche.png")
  imgCle = loadImage("clé.png")
}

function setup() {
  createCanvas(1500, 1800)

  let condition = etat()
  if (!condition) {
    document.cookie = "hasKey=" + false + ";path=/;expires=" + date(4) + " "
    jouer()
  }
}

function draw() {
  image(fond, 0, 0, 1500, windowHeight)
  image(retour, -60, 0)

  if (getCookie("hasKey") == "true") {
    image(imgCle, 20, 20, 80, 80)
  } else {
    fill(0)
    noStroke()
    textSize(22)
    textAlign(LEFT, TOP)
    text("Mission : trouver la clé", 20, 20)
  }

  if (showDialog == true) {
    let currentString = dialogText.substring(0, currentCharacter)

    let boxW = width - pageMargin * 2
    let boxH = 200
    let boxY = height * 0.5

    push()
    fill(0, 0, 0, 200)
    noStroke()
    rect(pageMargin, boxY, boxW, boxH, 10)

    textSize(50)
    textFont("Courier")
    textAlign(LEFT, TOP)
    fill(255)
    text(currentString, pageMargin + 10, boxY + 10, boxW - 20, boxH - 20)
    pop()

    currentCharacter += 0.5
  }


  if (mouseX > 125 && mouseX < 417 && mouseY > 727 && mouseY < 892) {
  cursor(CROSS)
  }else{
    cursor(ARROW)
  }

  if (mouseX > 755 && mouseX < 847 && mouseY > 525 && mouseY < 748) {
  cursor(CROSS)
  }else{
    cursor(ARROW)
  }
}

function mousePressed() {
  if (mouseX > 125 && mouseX < 417 && mouseY > 727 && mouseY < 892) {
    console.log("poubelle cliquée")
    window.location.href = "../2POUBELLE/2poubelle.html"
  }

  if (mouseX > 755 && mouseX < 847 && mouseY > 525 && mouseY < 748) {
    if (getCookie("hasKey") == "true") {
      window.location.href = "../../3/3BUREAU/3bureau.html"
    } else {
      showDialog = true
      dialogText = "La porte est verrouillée."
      currentCharacter = 0
    }
  }

  if (mouseX > 32 && mouseX < 240 && mouseY > 109 && mouseY < 295) {
    console.log("fleche cliquée")
    window.location.href = "../../VILLEMARCHE/0/villemarche.html";
    return
  }

}