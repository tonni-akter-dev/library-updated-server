const Thesis = require("./thesis.model");

const addThesis = async (req, res) => {
    try {
        const {
            title,
            description,
            instructor,
            semester,
            branch,
            teamMembers,
        } = req.body;
        const newThesis = new Thesis({
            title,
            description,
            instructor,
            semester,
            branch,
            teamMembers,
        });
        const result = await newThesis.save();

        res.status(201).json({
            success: true,
            message: "Thesis added successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add thesis",
            error_message: error.message,
        });
    }
};

const updateThesis = async (req, res) => {
    try {
        const thesisId = req.params.id;
        const updatedThesis = await Thesis.findByIdAndUpdate(
            thesisId,
            req.body,
            { new: true }
        )
        if (!updateThesis) {
            return res.status(404).json({
                success: false,
                message: "Thesis Not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Thesis updated successfully",
            data: updatedThesis
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update the book",
            error_message: error.message
        })
    }
}

const getThesisById = async (req, res) => {
    try {
        const result = await Thesis.findById({ _id: req.params.id })
        res.status(200).json({
            success: true,
            message: "Thesis retrieve successfully",
            data: result
        })
    } catch (error) {

        res.status(201).json({
            success: false,
            message: "Thesis retrieve failed",
            error_message: error.message
        })
    }
}

const deleteAThesis = async (req, res) => {
    try {
        const result = await Thesis.findByIdAndDelete({ _id: req.params.id })
        console.log(result)
        res.status(200).json({
            success: true,
            message: "thesis deleted successfully",
            // data: result
        })
    } catch (error) {
        res.status(201).json({
            success: false,
            message: "Book delete failed",
            error_message: error.message
        })
    }
}

const getAllThesis = async (req, res) => {
    try {
        const users = await Thesis.find({})
        res.status(200).send({
            status: 200,
            message: "Thesis get successfully",
            data: users
        })
    } catch (error) {
        res.status(203).send({
            message: err.message
        })
    }
}
module.exports = {
    addThesis,
    updateThesis,
    getThesisById,
    deleteAThesis, getAllThesis
};
