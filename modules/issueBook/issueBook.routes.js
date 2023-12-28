const express = require("express");
const router = express.Router();
const { issueABook } = require("./issueBook.controller");

// Route for books
router.post("/issueABook", issueABook);
module.exports = router;
