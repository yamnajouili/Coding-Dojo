const PlayersController = require("../controllers/team.controllres");

module.exports = (app) => {
  app.get("/api/players", PlayersController.findAllPlayers);
  
  app.get("/api/players/:id", PlayersController.findOnePlayers);
  app.post("/api/players", PlayersController.createNewPlayers);
  app.patch("/api/players/:id",PlayersController.updateExisitingPlayers);
  app.delete("/api/players/:id", PlayersController.deleteOnePlayers);
};