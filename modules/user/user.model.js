const mongoose = require('mongoose')
const { userRoleEnum } = require("./user.constant");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true
        },
        instituteId: {
            type: Number,
            require: true
        },
        department: {
            type: String,
            require: true
        },
        role: {
            type: userRoleEnum,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        designation: {
            type: String,
            require: false,
        },
        password: {
            type: String,
            require: true
        },
        personalEmail: {
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
        }

    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)
module.exports = User