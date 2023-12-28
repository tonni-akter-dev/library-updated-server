require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://tonniakterdev:lHg7i0nesQcrx03P@cluster0.qtpo1.mongodb.net/test1");
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed", err.message);
  }
};

module.exports = connectDB;

