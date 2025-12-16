const router = require("express").Router();
const jokeController = require("../controllers/joke.controller");

// (pour l’instant, juste une route de test)
router.get("/", jokeController.home);

module.exports = router;
