const app = require("./app");
const sequelize = require("./config/database");
require("./models/Joke");

const port = 3001;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`API listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });