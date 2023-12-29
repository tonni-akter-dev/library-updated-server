const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    callNo: {
      type: Number,
      required: false,
    },
    ISBN10: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: String,
      required: false,
    },
    accessionNumber: {
      type: Number,
      required: false,
    },
    edition: {
      type: String,
      required: false,
    },
    publisher: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    publicationYear: {
      type: Number,
      required: false,
    },
    accessionNumber: {
      type: Number,
      required: false,
    },
    tags: {
      type: String,
      required: false,
    },
    branch: {
      type: String,
      required: false,
    },
    pageNumber: {
      type: Number,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
