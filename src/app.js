const express = require("express");
const jokeRoutes = require("./routes/joke.routes");

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

app.use(express.json()); // doc Express: built-in middleware express.json()

app.use("/api/v1", jokeRoutes); // versionning demandé
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Api documentée (Swagger demandé) 

module.exports = app;
