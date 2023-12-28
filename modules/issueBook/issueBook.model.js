const mongoose = require('mongoose')
const Books = require('../book/book.model')

const IssueBookSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    instituteId: {
        type: Number,
        require: true
    },

    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books', // Refers to the 'Books' model
    },
    role: {
        // type: userRoleEnum,
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    presentAddress: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    // title: {
    //     type: String,
    //     required: true,
    // },
    // authors: {
    //     type: String,
    //     required: false,
    // },
    // accessionNumber: {
    //     type: Number,
    //     required: false,
    // },
    // edition: {
    //     type: String,
    //     required: false,
    // },
    // publisher: {
    //     type: String,
    //     required: true,
    // },
    issueDate: {
        type: String,
        required: true,
    },
    returnDate: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
)

const IssueBook = mongoose.model('IssueBook', IssueBookSchema)
module.exports = IssueBook