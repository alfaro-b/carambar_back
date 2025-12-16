const express = require("express");
const jokeRoutes = require("./routes/joke.routes");

const app = express();

app.use(express.json()); // doc Express: built-in middleware express.json()

app.use("/api/v1", jokeRoutes); // versionning demandé

module.exports = app;
