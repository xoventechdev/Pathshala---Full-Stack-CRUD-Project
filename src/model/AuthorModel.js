const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  image: {
    type: String,
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

const AuthorModel = new mongoose.model("authors", AuthorSchema);
module.exports = AuthorModel;
