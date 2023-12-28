require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://library-management-system:XtYcGi9ATPyxML8x@cluster0.qtpo1.mongodb.net/library-management", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed", err.message);
  }
};

module.exports = connectDB;
