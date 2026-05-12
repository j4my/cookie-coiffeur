
function setup() {
createCanvas(800,windowHeight)
    let condition = etat();
    if (!condition){
        document.cookie = "argent=" + 0 + ";path=/;expires=" + date(4) + " ";
    
        document.cookie = "cookie=" + 1 + ";path=/;expires=" + date(4) + " ";
        jouer();
    }
}

function draw() {
background(5,50,20);

}