const mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
  category_name: { type: String, required: true },
  discription: { type: String, required: true },
  status: { type: String, required: true }
});

module.exports = mongoose.model("category", categorySchema);
