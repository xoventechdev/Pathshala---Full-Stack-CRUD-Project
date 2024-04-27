const express = require("express");
const router = express.Router();
const {
  UserRegister,
  UserLogin,
  OTPRequest,
  OTPVerified,
  ResetPassword,
  UpdateProfile,
  UpdateProfileByAdmin,
  ReadUsers,
  ReadUser,
  DeleteUser,
} = require("../controller/UserController");
const { VerifyToken } = require("../middleware/UserAuth");
const {
  AddCategories,
  ReadCategories,
  ReadCategoriesBtIDs,
  UpdateCategories,
  DeleteCategories,
} = require("../controller/CategoryController");
const {
  AddAuthor,
  ReadAuthor,
  DeleteAuthor,
  UpdateAuthor,
  ReadAuthorBtIDs,
} = require("../controller/AuthorController");
const {
  AddBook,
  ReadBooks,
  ReadBookByID,
  UpdateBook,
  DeleteBook,
} = require("../controller/BookController");

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.post("/otp-request", OTPRequest);
router.post("/otp-verified", OTPVerified);
router.post("/reset-password", ResetPassword);

router.post("/update-profile/:id", VerifyToken, UpdateProfile);
router.post("/update-profileByAdmin/:id", VerifyToken, UpdateProfileByAdmin);
router.post("/read-users", VerifyToken, ReadUsers);
router.post("/read-user/:id", VerifyToken, ReadUser);
router.delete("/user-delete", VerifyToken, DeleteUser);

//Books Related routes
router.post("/add-category", AddCategories);
router.get("/read-category", ReadCategories);
router.get("/read-category/:id", ReadCategoriesBtIDs);
router.post("/update-category/:id", UpdateCategories);
router.delete("/delete-category/:id", DeleteCategories);

router.post("/add-author", AddAuthor);
router.get("/read-author", ReadAuthor);
router.get("/read-author/:id", ReadAuthorBtIDs);
router.post("/update-author/:id", UpdateAuthor);
router.delete("/delete-author/:id", DeleteAuthor);

router.post("/add-book", AddBook);
router.get("/read-book", ReadBooks);
router.get("/read-book/:id", ReadBookByID);
router.post("/update-book/:id", UpdateBook);
router.delete("/delete-book/:id", DeleteBook);

module.exports = router;
