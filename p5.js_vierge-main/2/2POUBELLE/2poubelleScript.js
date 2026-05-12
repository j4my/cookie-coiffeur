function mousePressed() {
  if (showDialog == true) {
    showDialog = false
    return
  }}

var imgCle

var X1 = 0
var Y1 = 200
var X2 = 100
var Y2 = 500
var X3 = 300
var Y3 = 300

var sacActif = 0
var offX = 0
var offY = 0

var cleRamassee = false

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

function preload() {
  fond   = loadImage("poubelle.png")
  cle    = loadImage("clé.png")
  sac    = loadImage("sac.png")
  retour = loadImage("../../fleche.png")
  imgCle = loadImage("clé.png")
}

function setup() {
  createCanvas(1500, 1800)

  if (getCookie("hasKey") == "true") {
    cleRamassee = true
  }
}

function draw() {
  image(fond, 0, 0, 1500, windowHeight)

  if (cleRamassee == false) {
    image(cle, 200, 400, 300, 300)
  }

  image(sac, X1, Y1, 500, 500)
  image(sac, X2, Y2, 500, 500)
  image(sac, X3, Y3, 500, 500)

  image(retour, -60, -75)

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
}

function mouseDragged() {
  if (sacActif == 1) {
    X1 = mouseX - offX
    Y1 = mouseY - offY
  }
  if (sacActif == 2) {
    X2 = mouseX - offX
    Y2 = mouseY - offY
  }
  if (sacActif == 3) {
    X3 = mouseX - offX
    Y3 = mouseY - offY
  }
}

function mouseReleased() {
  sacActif = 0
}

function mousePressed() {
  if (mouseX > 32 && mouseX < 240 && mouseY > 34 && mouseY < 220) {
    console.log("fleche cliquée")
    window.location.href = "../2BARBER/2barber.html"
    return
  }

  if (mouseX > X3 && mouseX < X3 + 500 && mouseY > Y3 && mouseY < Y3 + 500) {
    sacActif = 3
    offX = mouseX - X3
    offY = mouseY - Y3
    return
  }
  if (mouseX > X2 && mouseX < X2 + 500 && mouseY > Y2 && mouseY < Y2 + 500) {
    sacActif = 2
    offX = mouseX - X2
    offY = mouseY - Y2
    return
  }
  if (mouseX > X1 && mouseX < X1 + 500 && mouseY > Y1 && mouseY < Y1 + 500) {
    sacActif = 1
    offX = mouseX - X1
    offY = mouseY - Y1
    return
  }

  if (cleRamassee == false) {
    if (mouseX > 200 && mouseX < 500 && mouseY > 400 && mouseY < 700) {
      var cleCachee = false

      if (mouseX > X1 && mouseX < X1 + 500 && mouseY > Y1 && mouseY < Y1 + 500) {
        cleCachee = true
      }
      if (mouseX > X2 && mouseX < X2 + 500 && mouseY > Y2 && mouseY < Y2 + 500) {
        cleCachee = true
      }
      if (mouseX > X3 && mouseX < X3 + 500 && mouseY > Y3 && mouseY < Y3 + 500) {
        cleCachee = true
      }

      if (cleCachee == false) {
        cleRamassee = true
        document.cookie = "hasKey=" + true + ";path=/;expires=" + date(4) + " "
        showDialog = true
        dialogText = "les clés etaient vraiment mal cachées"
        currentCharacter = 0
      }
    }
  }
}