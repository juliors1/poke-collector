const Pokemon = require("../models/pokemon");
const axios = require("axios");

module.exports = {
  pokedex,
  search,

};

function pokedex(req, res) {
  res.render("pokemon/pokedex", {
    title: "Pokedex",
    pokemon: [],
    user: req.user
  });
}

function search(req,res){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.query.toLowerCase()}`)
  .then((response)=>{
    res.render('pokemon/pokedex',{
      pokemon: response.data,
      user: req.user
    })
  })
}