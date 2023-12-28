const mongoose = require('mongoose')
import { userRoleEnum } from './user.constant';

const userSchema = new mongoose.Schema({
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