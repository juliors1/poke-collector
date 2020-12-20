const plinks = new Audio("/audio/plink.mp3");
plinks.volume = 0.5;
const trainerList = new Audio("/audio/trainer-list.mp3");
trainerList.volume = 0.2;
const logOff = new Audio("/audio/log-off.mp3");
logOff.volume = 0.5;
const pokedex = new Audio("/audio/pokedex.mp3");
pokedex.volume = 0.5;

function plink() {
  plinks.play();
}

function trainerSound() {
  trainerList.play();
}

function logOff() {
  logout.play();
}

function pokedex() {
  pokedexs.play();
}
