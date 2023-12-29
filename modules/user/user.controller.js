const { generateToken } = require('../../utils/auth');
const User = require('./user.model')
const bcrcypt = require("bcryptjs");

const registerUser = async (req, res) => {
    console.log(req.body)
    try {
        const isExist = await User.findOne({ email: req.body.email });
        if (isExist) {
            return res.status(403).send({
                message: `${req.body.email} is already Exist!`,
                status: 403,
            });
        } else {
            const newUser = new User({
                role: req.body.role,
                fullName: req.body.fullName,
                instituteId: req.body.instituteId,
                email: req.body.email,
                password: bcrcypt.hashSync(req.body.password),
                department: req.body.department,
                personalEmail: req.body.personalEmail,
                presentAddress: req.body.presentAddress,
                phoneNumber: req.body.phoneNumber,
            });

            const user = await newUser.save();
            const token = await generateToken(user);

            res.status(200).send({
                message: "We have created account successfully",
                status: 200,
                user,
                accessToken: token,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({
                success: false,
                type: "email",
                message: "User not found",
            });
        }

        if (user && bcrcypt.compareSync(req.body.password, user.password)){
            return res.send({
                success: true,
                message: "Logged in successfully",
                status: 200,
                user
            });
    } else {
        res.status(401).send({
            success: false,
            type: "password",
            message: "Invalid user or password",
            status: 401,
        });
    }
} catch (err) {
    res.status(500).send({
        message: err.message,
    });
}
};
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({
            status: 200,
            message: "Users get successfully",
            data: users
        })
    } catch (error) {
        res.status(203).send({
            message: err.message
        })
    }
}
module.exports = {
    registerUser,
    loginUser,
    getAllUsers
}