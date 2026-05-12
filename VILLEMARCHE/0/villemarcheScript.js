let img
let perso ,fond;
let w, h;
let string = `
Ne surtout pas continuer dans cette rue... c'est hyper dangereux !`;
// Which character in the string are we up to on the typewriter
let currentCharacter = 0;
// Page margins for a sheet of paper effect
let pageMargin = 25;

function preload() {
   fond = loadImage("rueintermediare.png");
   perso = loadImage("perso-1.png");

}



function setup() {
  createCanvas(1500, windowHeight);

    w = 8000
    h = (perso.height / perso.width) * w;

}

function draw() {
  image(fond, 0, 0, width, height);
  
  let respiration = sin(frameCount * 0.5) * 10;
  let wAnim = w + respiration;
  let hAnim = h + respiration;

  image(perso, 800 - wAnim / 2, 999 - hAnim / 2, wAnim, hAnim);


  let currentString = string.substring(0, currentCharacter);
   push();
   textSize(50);   

   textFont(`Courier`);
 

let boxW = width - pageMargin * 2;
let boxH = 200;
let boxY = height * 0.85;
     //box pour le texte   
  fill(215, 98, 56, 200); // noir semi-transparent (r, g, b, alpha)
noStroke();
rect(pageMargin, boxY, boxW, boxH, 10);
  
    textAlign(LEFT, "top");  
     fill(255);
   text(currentString, pageMargin + 10, boxY + 10, boxW - 20, boxH - 20);
  pop();
   currentCharacter += 0.1;

}

function mousePressed() {
  console.log("X:", mouseX, "Y:", mouseY); // ← clique sur ta flèche et dis moi ce que tu vois
  

    console.log("fleche cliquée");
    window.location.href = "../../2/2BARBER/2barber.html";
  }


