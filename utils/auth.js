require("dotenv").config();
const jwt = require('jsonwebtoken')

const generateToken = async (user) => {
    return jwt.sign(

        {
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            _id: user?._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "10days"
        }
    )
}
module.exports = {
    generateToken,
};
