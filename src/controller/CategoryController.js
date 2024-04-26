const CategoryModel = require("../model/CategoryModel");

exports.AddCategories = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    if (title == null && description == null && image == null) {
      return res.json({
        status: "warning",
        response: "All fields are required",
      });
    }
    const existing = await CategoryModel.find({ title: title });
    if (existing.length > 0) {
      return res.json({
        status: "warning",
        response: `Category with ${title} already exists`,
      });
    }
    const newCategory = new CategoryModel({
      title: title,
      description: description,
      image: image,
    });
    await newCategory.save();
    res.json({
      status: "success",
      response: "Category added successfully",
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.ReadCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json({
      status: "success",
      response: categories,
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.ReadCategoriesBtIDs = async (req, res) => {
  try {
    const { id } = req.params;
    const categories = await CategoryModel.find({ _id: id });
    if (!categories.length > 0) {
      return res.json({
        status: "warning",
        response: `Category with ${id} does not exist`,
      });
    }
    res.json({
      status: "success",
      response: categories,
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};

exports.UpdateCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    if (title == null && description == null && image == null) {
      return res.json({
        status: "warning",
        response: "All fields are required",
      });
    }
    const existing = await CategoryModel.find({ _id: id });
    if (existing.length == 0) {
      return res.json({
        status: "warning",
        response: `Category with ${id} does not exist`,
      });
    }
    await CategoryModel.findByIdAndUpdate(id, {
      title: title,
      description: description,
      image: image,
    });
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

exports.DeleteCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await CategoryModel.find({ _id: id });
    if (existing.length == 0) {
      return res.json({
        status: "warning",
        response: `Category with ${id} does not exist`,
      });
    }
    await CategoryModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      response: "Category deleted successfully",
    });
  } catch (error) {
    res.json({
      status: "error",
      response: error.message,
    });
  }
};
