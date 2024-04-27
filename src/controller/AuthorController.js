const AuthorModel = require("../model/AuthorModel");

exports.AddAuthor = async (req, res) => {
  try {
    const { name, about, image, isActive } = req.body;
    if (name == null) {
      return res.json({
        status: "warning",
        response: "Author name required",
      });
    }
    const existing = await AuthorModel.find({ name: name });
    if (existing.length > 0) {
      return res.json({
        status: "warning",
        response: `Author name ${name} already exists`,
      });
    }
    const newAuthor = new AuthorModel({
      name: name,
      about: about,
      image: image,
      isActive: isActive,
    });
    await newAuthor.save();
    res.json({
      status: "success",
      response: "Author added successfully",
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.ReadAuthor = async (req, res) => {
  try {
    const author = await AuthorModel.find();
    res.json({
      status: "success",
      response: author,
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.ReadAuthorBtIDs = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await AuthorModel.find({ _id: id });
    if (!author.length > 0) {
      return res.json({
        status: "warning",
        response: `Author with ${id} does not exist`,
      });
    }
    res.json({
      status: "success",
      response: author,
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.UpdateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (name == null) {
      return res.json({
        status: "warning",
        response: "Author name is required",
      });
    }
    const existing = await AuthorModel.find({ _id: id });
    if (existing.length == 0) {
      return res.json({
        status: "warning",
        response: `Author with ${id} does not exist`,
      });
    }
    await AuthorModel.findByIdAndUpdate(id, req.body);
    res.json({
      status: "success",
      response: "Category updated successfully",
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.DeleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await AuthorModel.find({ _id: id });
    if (existing.length == 0) {
      return res.json({
        status: "warning",
        response: `Author with ${id} does not exist`,
      });
    }
    await AuthorModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      response: "Author deleted successfully",
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};
