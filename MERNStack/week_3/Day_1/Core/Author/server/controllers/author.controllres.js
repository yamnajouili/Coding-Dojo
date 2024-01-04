// The controller does the C R U D for the DB

const Authors = require("../models/author");
const Products = require("../models/author");

// READ ALL
module.exports.findAllAuthors = (req, res) => {
  Authors.find().sort({name:1})
    .then((author) => {
      res.json(author);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOneAuthor = (req, res) => {
  Authors.findOne({ _id: req.params.id })
    .then((oneauthor) => {
      res.json(oneauthor);
    })
    .catch((err) => res.json(err));
};



// CREATE

module.exports.createNewAuthor = (req, res) => {
  Authors.create(req.body)
    .then((newlyCreatedauthor) => {
      res.json(newlyCreatedauthor);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE

module.exports.updateExisitingAuthor = (req, res) => {
  Authors.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => {
      res.json(updatedAuthor);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteOneAuthor = (req, res) => {
  Authors.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};