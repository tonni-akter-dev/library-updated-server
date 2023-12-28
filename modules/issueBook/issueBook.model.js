const mongoose = require('mongoose')
const Books = require('../book/book.model')
const { userRoleEnum } = require('../user/user.constant')

const IssueBookSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    instituteId: {
        type: Number,
        require: true
    },
    // populate the book  info
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Denied'],
        default: 'Pending',
    },
    role: {
        type: userRoleEnum,
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