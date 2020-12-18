const Pokemon = require("../models/pokemon");
const axios = require("axios");

module.exports = {
  pokedex,
  search,
  add,


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
// add a pokemon to your team
function add(req,res) {
req.user.team.push(req.body)
req.user.save()
.then(()=>{
  res.redirect('/users/profile')
})
}