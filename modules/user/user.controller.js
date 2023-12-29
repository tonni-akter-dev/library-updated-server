const User = require('./user.model')

const registerUser = async (req, res) => {
    console.log(req.body)
    try {
        const isExist = await User.findOne({ email: req.body.email });

        // const isVerified = isExist?.isVerified;
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
                password: req.body.password,
                department: req.body.department,
                personalEmail: req.body.personalEmail,
                presentAddress: req.body.presentAddress,
                phoneNumber: req.body.phoneNumber,
            });

            const user = await newUser.save();
            res.status(200).send({
                message: "We have created account successfully",
                status: 200,
                user,
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

        if (user && (req.body.password, user.password)) {
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
module.exports = {
    registerUser,
    loginUser
}