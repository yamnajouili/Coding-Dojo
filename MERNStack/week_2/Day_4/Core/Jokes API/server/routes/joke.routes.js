const JokesController = require("../controllers/jokes.controllres");

module.exports = (app) => {
  app.get("/api/jokes", JokesController.findAllJokes);
  app.post("/api/jokes", JokesController.createNewJoke);
  app.get("/api/jokes/:id", JokesController.findOneJoke);
  app.patch("/api/jokes/:id", JokesController.updateExisitingJoke);
  app.delete("/api/jokes/:id", JokesController.deleteOneJoke);
};