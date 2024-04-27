const BookModel = require("../model/BookModel");

exports.AddBook = async (req, res) => {
  try {
    const { title, author, category, image, pdf_url, pdfSize } = req.body;
    if (
      title == null ||
      author == null ||
      category == null ||
      image == null ||
      pdf_url == null ||
      pdfSize == null
    ) {
      return res.json({
        status: "warning",
        response: "Book info required",
      });
    }
    const existing = await BookModel.find({ title: title });
    if (existing.length > 0) {
      return res.json({
        status: "warning",
        response: `${title} already exists`,
      });
    }
    const book = new BookModel(req.body);
    await book.save();
    res.json({
      status: "success",
      response: `${title} added successfully`,
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.ReadBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json({
      status: "success",
      response: books,
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.ReadBookByID = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.find({ _id: id });
    res.json({
      status: "success",
      response: book,
    });
  } catch (error) {}
};

exports.UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, category, image, pdf_url, pdfSize } = req.body;
    if (
      title == null ||
      author == null ||
      category == null ||
      image == null ||
      pdf_url == null ||
      pdfSize == null
    ) {
      return res.json({
        status: "warning",
        response: "Book info required",
      });
    }
    const existing = await BookModel.find({ _id: id });
    if (existing.length == 0) {
      return res.json({
        status: "warning",
        response: `Book with ${id} does not exist`,
      });
    }
    await BookModel.findByIdAndUpdate(id, req.body);
    res.json({
      status: "success",
      response: `${title} updated successfully`,
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.DeleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await BookModel.find({ _id: id });
    if (existing.length == 0) {
      return res.json({
        status: "warning",
        response: `Book with ${id} does not exist`,
      });
    }
    await BookModel.findByIdAndUpdate(id, req.body);
    res.json({
      status: "success",
      response: "Book updated successfully",
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};
