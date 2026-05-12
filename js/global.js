//Récupérer la valeur d'un cookie 
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}


//obtenir une date d'expériration
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