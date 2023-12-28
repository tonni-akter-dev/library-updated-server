const mongoose = require("mongoose");

const thesisSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    teamMembers: [
        {
            name: {
                type: String,
                required: true,
            },
            studentId: {
                type: String,
                required: true,
            },
        },
    ],
});

const Thesis = mongoose.model("Thesis", thesisSchema);

module.exports = Thesis;
