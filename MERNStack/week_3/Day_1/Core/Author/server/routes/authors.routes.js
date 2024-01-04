const AuthorController = require("../controllers/author.controllres");

module.exports = (app) => {
  app.get("/api/authors", AuthorController.findAllAuthors);
  
  app.get("/api/authors/:id", AuthorController.findOneAuthor);
  app.post("/api/authors", AuthorController.createNewAuthor);
  app.patch("/api/authors/:id", AuthorController.updateExisitingAuthor);
  app.delete("/api/authors/:id", AuthorController.deleteOneAuthor);
};