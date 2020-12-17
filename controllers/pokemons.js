const Pokemon = require("../models/pokemon");
const axios = require("axios");

module.exports = {
  pokedex,
};

function pokedex(req, res) {
  res.render("pokemon/pokedex", {
    title: "Pokedex",
    pokemon: null,
    user: req.user ? req.user : null,
  });
}
