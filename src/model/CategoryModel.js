const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  totalBooks: {
    type: Number,
    default: 0,
  },
  addedBy: {
    type: String,
    default: 0,
  },
});

const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel;
