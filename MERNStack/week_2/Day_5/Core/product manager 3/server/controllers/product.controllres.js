// The controller does the C R U D for the DB

const Products = require("../models/product");

// READ ALL
module.exports.findAllProducts = (req, res) => {
  Products.find()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOneProduct = (req, res) => {
 Products.findOne({ _id: req.params.id })
    .then((oneproduct) => {
      res.json(oneproduct);
    })
    .catch((err) => res.json(err));
};

// CREATE

module.exports.createNewProduct = (req, res) => {
  Products.create(req.body)
    .then((newlyCreatedproduct) => {
      res.json(newlyCreatedproduct);
    })
    .catch((err) => res.json(err));
};

// UPDATE

module.exports.updateExisitingProduct = (req, res) => {
  Products.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((err) => res.json(err));
};

// DELETE
module.exports.deleteOneProduct = (req, res) => {
  Products.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};