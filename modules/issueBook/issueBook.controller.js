// issueBook.controller.js
const IssueBook = require('./issueBook.model');
const Books = require('../book/book.model');

const issueABook = async (req, res) => {
    try {
        // Create a new IssueBook instance
        const newIssue = new IssueBook(req.body);

        // Find the book based on bookId
        const bookInfo = await Books.findById(req.body.bookId);

        if (!bookInfo) {
            return res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }

        // Populate the bookId field in the newIssue instance
        newIssue.bookId = bookInfo;

        // Save the new issue book
        const result = await newIssue.save();

        res.status(201).json({
            success: true,
            message: 'New book issued successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to issue a new book',
            error_message: error.message,
        });
    }
};

module.exports = {
    issueABook,
};
