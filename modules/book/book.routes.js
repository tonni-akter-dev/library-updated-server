const express = require("express");
const router = express.Router();
const { createBook, updateBook ,getAllBooks} = require("./book.controller");

// Route for books
router.get("/getAllBooks", getAllBooks);
router.post("/create", createBook);
router.put("/update/:id", updateBook);

module.exports = router;
