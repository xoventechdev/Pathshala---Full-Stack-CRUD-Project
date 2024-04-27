const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  pdf_url: {
    type: String,
  },
  audio_url: {
    type: String,
  },
  publisher: {
    type: String,
    required: true,
  },
  pdfSize: {
    type: Number,
    required: true,
  },
  isAudio: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  addedBy: {
    type: String,
    default: 0,
  },
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;
