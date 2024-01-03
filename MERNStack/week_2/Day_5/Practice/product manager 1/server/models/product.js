// import the mongoose lib
const mongoose = require("mongoose");

// the model

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least 3 characters"],
    },
    price: {
      type: Number,
      required: [true, "{PATH} is required"],
      min: [100, "must be valid"],
    
    },
    description: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [10, "{PATH} must be at least 10 characters"],
    },
    
   
  },
  { timestamps: true }
);

const Products = mongoose.model("Product", ProductSchema);

module.exports = Products;