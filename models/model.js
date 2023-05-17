const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },

  products:[{
    name:{type:String},
    price:{type:Number}
  }]
});

module.exports = mongoose.model("Data", dataSchema);
