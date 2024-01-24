// import the mongoose lib
const mongoose = require("mongoose");

// the model

const PlayersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [2, "{PATH} must be at least 2 characters"],
    },
    
     position: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least 3 characters"],
    },
    
   
    
    
    
    
   
  },
  { timestamps: true }
);

const Players = mongoose.model("Players", PlayersSchema);

module.exports = Players;