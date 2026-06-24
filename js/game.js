console.log("game.js loaded ✅");
let lancer = document.querySelector(".init__button");
let nomJoueur1 = document.getElementsByClassName("nes-input")[0];
let pvJoueur1 = document.getElementsByClassName("nes-input")[1];
let nomJoueur2 = document.getElementsByClassName("nes-input")[2];
let pvJoueur2 = document.getElementsByClassName("nes-input")[3];
let afficherNomJoueur1 = document.querySelector("#p1 .player__informations_name");
let afficherNomJoueur2 = document.querySelector("#p2 .player__informations_name");
let barreProgression1 = document.querySelector("#p1 .player__bar");
let barreProgression2 = document.querySelector("#p2 .player__bar");
let afficherPvJoueur1 = document.querySelector("#pv-p1");
let afficherPvJoueur2 = document.querySelector("#pv-p2");
let santeJoueur = [parseInt(pvJoueur1.value), parseInt(pvJoueur2.value)];
let boutonsAttaqueJoueur1 = document.querySelectorAll("#p1 .player__spells_spell");
let boutonsAttaqueJoueur2 = document.querySelectorAll("#p2 .player__spells_spell");
let boutonRegenerationJoueur1 = document.querySelector("#regeneration-p1");
let boutonRegenerationJoueur2 = document.querySelector("#regeneration-p2");
function verifierChamps() {
  if (nomJoueur1.value.length > 0 && pvJoueur1.value.length > 0 && nomJoueur2.value.length > 0 && pvJoueur2.value.length > 0) {
    lancer.classList.remove("is-disabled");
    lancer.removeAttribute("disabled");
  } else {
    lancer.classList.add("is-disabled");
    lancer.setAttribute("disabled", "disabled");
  }
}
verifierChamps();
nomJoueur1.addEventListener("input", verifierChamps);
pvJoueur1.addEventListener("input", verifierChamps);
nomJoueur2.addEventListener("input", verifierChamps);
pvJoueur2.addEventListener("input", verifierChamps);
lancer.addEventListener("click", function () {
  console.log("Lancement du jeu...");
  document.getElementById("init").style.display = "none";
  afficherNomJoueur1.textContent = nomJoueur1.value;
  afficherNomJoueur2.textContent = nomJoueur2.value;
  barreProgression1.classList.remove("is-pattern");
  barreProgression1.classList.add("is-success");
  barreProgression2.classList.remove("is-pattern");
  barreProgression2.classList.add("is-success");
  barreProgression1.setAttribute("value", pvJoueur1.value);
  barreProgression1.setAttribute("max", pvJoueur1.value);
  afficherPvJoueur1.textContent = pvJoueur1.value;
  barreProgression2.setAttribute("value", pvJoueur2.value);
  barreProgression2.setAttribute("max", pvJoueur2.value);
  afficherPvJoueur2.textContent = pvJoueur2.value;
  santeJoueur = [parseInt(pvJoueur1.value), parseInt(pvJoueur2.value)];
  console.log("Jeu lancé");
  launchMusic();
});
boutonsAttaqueJoueur1.forEach((bouton, index) => {
  bouton.addEventListener("click", function () {
    let valeurDegats = parseInt(bouton.getAttribute("data-damage"));
    const attaquesJoueur1 = ["sword", "spear", "punch"];
    attack(2, attaquesJoueur1[index]);
    damage(2, valeurDegats);
    barreProgression2.value = barreProgression2.value - valeurDegats;
    checkVictory();
    boutonsAttaqueJoueur1.forEach(bouton => bouton.setAttribute("disabled", "disabled"));
    boutonsAttaqueJoueur2.forEach(bouton => bouton.removeAttribute("disabled"));
    console.log("Attaque du joueur 1 effectuée");
  });
});
boutonsAttaqueJoueur2.forEach((bouton, index) => {
  bouton.addEventListener("click", function () {
    let valeurDegats = parseInt(bouton.getAttribute("data-damage"));
    const attaquesJoueur2 = ["meoww", "claw", "croccroc"];
    attack(1, attaquesJoueur2[index]);
    damage(1, valeurDegats);
    barreProgression1.value = barreProgression1.value - valeurDegats;
    checkVictory();
    boutonsAttaqueJoueur2.forEach(bouton => bouton.setAttribute("disabled", "disabled"));
    boutonsAttaqueJoueur1.forEach(bouton => bouton.removeAttribute("disabled"));
    console.log("Attaque du joueur 2 effectuée");
  });
});
boutonRegenerationJoueur1.addEventListener("click", function () {
  regenerate(1);
});
boutonRegenerationJoueur2.addEventListener("click", function () {
  regenerate(2);
});
function regenerate(player) {
  const healingSound = new Audio("assets/audio/healing.mp3");
  const healingGif = "assets/images/attacks/heal.gif";
  const healAmount = 20;
  healingSound.play();
  if (player === 1) {
    santeJoueur[0] = Math.min(santeJoueur[0] + healAmount, parseInt(pvJoueur1.value));
    barreProgression1.value = santeJoueur[0];
    afficherPvJoueur1.textContent = santeJoueur[0];
  } else {
    santeJoueur[1] = Math.min(santeJoueur[1] + healAmount, parseInt(pvJoueur2.value));
    barreProgression2.value = santeJoueur[1];
    afficherPvJoueur2.textContent = santeJoueur[1];
  }
  const playerDiv = document.querySelector(`#p${player}`);
  const healAnimation = document.createElement("img");
  healAnimation.src = healingGif;
  healAnimation.classList.add("heal-animation");
  playerDiv.appendChild(healAnimation);
  setTimeout(() => {
    playerDiv.removeChild(healAnimation);
  }, 1000);
}
function checkVictory() {
  if (santeJoueur[0] <= 0) {
    console.log("Joueur 1 vaincu !");
    victory(2);
  } else if (santeJoueur[1] <= 0) {
    console.log("Joueur 2 vaincu !");
    victory(1);
  }
}
const victorySound = new Audio("assets/audio/victory.mp3");
function playVictorySound() {
  victorySound.play();
}