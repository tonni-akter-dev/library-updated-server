const Books = require("./book.model");

const createBook = async (req, res) => {
    try {
        const newBook = new Books(req.body);
        const result = await newBook.save();
        res.status(201).json({
            success: true,
            message: "New book added successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add a new book",
            error_message: error.message,
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedBook = await Books.findByIdAndUpdate(
            bookId,
            req.body,
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: updatedBook,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update the book",
            error_message: error.message,
        });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find();
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve books",
            error_message: error.message,
        });
    }
};

const getBooksById = async (req, res) => {
    try {
        const result = await Books.findById({ _id: req.params.id })
        res.status(200).json({
            success: true,
            message: "Book retrieve successfully",
            data: result
        })
    } catch (error) {

        res.status(201).json({
            success: false,
            message: "Book retrieve failed",
            error_message: error.message
        })
    }
}

// deletE a book

const deleteABook = async (req, res) => {
    try {
        const result = await Books.findByIdAndDelete({ _id: req.params.id })
        console.log(result)
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: result
        })
    } catch (error) {
        res.status(201).json({
            success: false,
            message: "Book delete failed",
            error_message: error.message
        })
    }
}

module.exports = {
    createBook,
    updateBook,
    getAllBooks,
    getBooksById,
    deleteABook
};
