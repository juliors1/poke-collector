const router = require("express").Router();
const pokemonCtrl = require("../controllers/pokemons");

router.get('/pokedex',isLoggedIn, pokemonCtrl.pokedex)
router.post('/search', isLoggedIn, pokemonCtrl.search);
router.post('/:id/team', isLoggedIn, pokemonCtrl.add)
router.delete('/:id/team',isLoggedIn,pokemonCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

  module.exports = router;