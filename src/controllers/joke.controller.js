const Joke = require("../models/Joke");

// POST /api/v1/blagues
exports.create = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "question et answer sont requis" });
    }

    const created = await Joke.create({ question, answer });
    return res.status(201).json(created);
  } catch (err) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

// GET /api/v1/blagues
exports.getAll = async (req, res) => {
  try {
    const jokes = await Joke.findAll({ order: [["id", "ASC"]] });
    return res.json(jokes);
  } catch (err) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

// GET /api/v1/blagues/:id
exports.getOne = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);

    if (!joke) {
      return res.status(404).json({ message: "Blague introuvable" });
    }

    return res.json(joke);
  } catch (err) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

// GET /api/v1/blagues/random
exports.getRandom = async (req, res) => {
  try {
    const count = await Joke.count();

    if (count === 0) {
      return res.status(404).json({ message: "Aucune blague" });
    }

    const offset = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ offset });

    return res.json(joke);
  } catch (err) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
