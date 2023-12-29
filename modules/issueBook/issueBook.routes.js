const express = require("express");
const router = express.Router();
const { issueABook ,getAllIssuedBook} = require("./issueBook.controller");

// Route for books
router.post("/issueABook", issueABook);
router.get("/getAllIssuedBook", getAllIssuedBook);
module.exports = router;
