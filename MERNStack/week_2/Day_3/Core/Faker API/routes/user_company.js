const newFakeUser = require("../models/user");

const newFakecompany = require("../models/company");

// console.log(users);
module.exports = (app) => {
  // READ ALL
  app.get("/api/user/company", (req, res) => {
    data={
        user:newFakeUser,
        company:newFakecompany
    }
    res.json(data);
  });}