const router = require("express").Router();
const jokeController = require("../controllers/joke.controller");

router.post("/blagues", jokeController.create);
router.get("/blagues", jokeController.getAll);
router.get("/blagues/random", jokeController.getRandom);
router.get("/blagues/:id", jokeController.getOne);

module.exports = router;
