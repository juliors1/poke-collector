const plinks = new Audio("/audio/plink.mp3");
plinks.volume = 0.5;
const trainerList = new Audio("/audio/trainerList.mp3");
trainerList.volume = 0.2;
const logOff = new Audio("/audio/logOff.mp3");
logOff.volume = 0.5;
const pokedex = new Audio("/audio/pokedex.mp3");
pokedex.volume = 0.5;

function plink() {
  plinks.play();
}

function trainerSound() {
  trainerList.play();
}

function logOffSound() {
  logOff.play();
}

function pokedexSound() {
  pokedex.play();
}
