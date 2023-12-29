const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;
const app = express();
const http = require("http");
const Server = http.createServer(app);

// routes import 
const bookRoutes = require("./modules/book/book.routes")
const IssueAbookRoutes = require("./modules/issueBook/issueBook.routes")
const thesisRoutes = require("./modules/thesis/thesis.routes")
const userRoutes = require('./modules/user/user.routes')

// Middleware
app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

connectDB();

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/issueAbookRoutes", IssueAbookRoutes);
app.use("/api/thesis", thesisRoutes);
app.use("/api/user", userRoutes);

// Testing API
app.get("/", (req, res) => {
  res.send("Server is running");
});

Server.listen(PORT, () => {
  console.log(`Server is Running PORT: ${PORT}`);
});
