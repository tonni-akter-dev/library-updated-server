const express = require("express");
const router = express.Router();
const { createBook, updateBook, getAllBooks, getBooksById, deleteABook } = require("./book.controller");

// Route for books
router.get("/getAllBooks", getAllBooks);
router.get("/getSingleBook/:id", getBooksById);
router.post("/create", createBook);
router.post("/create", createBook);
router.put("/update/:id", updateBook);
router.delete("/deleteABook/:id", deleteABook);

module.exports = router;
