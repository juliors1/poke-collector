const Pokemon = require("../models/pokemon");
const axios = require("axios");

module.exports = {
  pokedex,
  search,
  randomPokemon,
  add,
  delete: deletePokemon,
};
// render pokedex page
function pokedex(req, res) {
  res.render("pokemon/pokedex", {
    pokemon: [],
    user: req.user
  });
}
// implement API call
function search(req,res){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.query.toLowerCase()}`)
  .then((response)=>{
    res.render('pokemon/pokedex',{
      pokemon: response.data,
      user: req.user
    })
  })
}
// Random pokemon call
function randomPokemon(req,res){
  const y = Math.floor(Math.random() * 152) + 1
    axios.get(`https://pokeapi.co/api/v2/pokemon/${y}`)
    .then((response)=>{
      res.render('pokemon/pokedex',{
        pokemon: response.data,
        user: req.user
      })
    })
  }
// add a pokemon to your team
function add(req,res) {
req.user.team.push(req.body)
req.user.save()
.then(()=>{
  res.redirect('/users/profile')
})
}
// delete a pokemon from your team
function deletePokemon(req,res){
  let idx = req.user.team.findIndex((p)=>{
    return p.id === parseInt(req.params.id)
  })
  req.user.team.splice(idx, 1)
  req.user.save()
  .then(()=>{
    res.redirect('/users/profile')
  })
}