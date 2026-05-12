let fond, ytber; 
let w, h;
let string = `
bonjour nouveau vlog urbex on va explorer un barbershop terrifiant`;
// Which character in the string are we up to on the typewriter
let currentCharacter = 0;
// Page margins for a sheet of paper effect
let pageMargin = 25;

function preload() {
  fond = loadImage("bedroom.png");
  ytber = loadImage("youtber-perso.png");
}

function setup() {
  createCanvas(1500, windowHeight);
  
  w = 2000
  h = (ytber.height / ytber.width) * w;
  
  let condition = etat();
  if (!condition) {
    document.cookie = "argent=" + 0 + ";path=/;expires=" + date(4);
    document.cookie = "cookie=" + 1 + ";path=/;expires=" + date(4);
    jouer();
  }
}

function draw() {
  image(fond, 0, 0, width, height);

  let respiration = sin(frameCount * 0.1) * 10;
  let wAnim = w + respiration;
  let hAnim = h + respiration;

  image(ytber, 200 - respiration / 2, 200 - respiration / 2, wAnim, hAnim);


  let currentString = string.substring(0, currentCharacter);
   push();
   textSize(50);   

   textFont(`Courier`);
 

let boxW = width - pageMargin * 2;
let boxH = 200;
let boxY = height * 0.7;
     //box pour le texte   
  fill(215, 98, 56, 200); // noir semi-transparent (r, g, b, alpha)
noStroke();
rect(pageMargin, height * 0.7, boxW, boxH, 10);
  
    textAlign(LEFT, "top");  
     fill(255);
   text(currentString, pageMargin + 10, boxY + 10, boxW - 20, boxH - 20);
  pop();
   currentCharacter += 0.5;
}

function mousePressed() {
  console.log("X:", mouseX, "Y:", mouseY); // ← clique sur ta flèche et dis moi ce que tu vois
  
if (mouseX > 93 && mouseX < 375 && mouseY > 232 && mouseY < 778) {
    console.log("fleche cliquée");
    window.location.href = "../../VILLEMARCHE/0/villemarche.html";
  }
}