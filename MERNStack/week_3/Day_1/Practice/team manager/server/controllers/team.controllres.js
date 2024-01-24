// The controller does the C R U D for the DB

const Players = require("../models/team");


// READ ALL
module.exports.findAllPlayers = (req, res) => {
  Players.find().sort({name:1})
    .then((player) => {
      res.json(player);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOnePlayers = (req, res) => {
  Players.findOne({ _id: req.params.id })
    .then((oneplayer) => {
      res.json(oneplayer);
    })
    .catch((err) => res.json(err));
};



// CREATE

module.exports.createNewPlayers = (req, res) => {
  Players.create(req.body)
    .then((newlyCreatedplayer) => {
      res.json(newlyCreatedplayer);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE

module.exports.updateExisitingPlayers = (req, res) => {
  Players.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPlayer) => {
      res.json(updatedPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteOnePlayers = (req, res) => {
  Players.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};