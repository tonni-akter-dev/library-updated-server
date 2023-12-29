const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const http = require("http");

const PORT = process.env.PORT || 8000;

const app = express();
const Server = http.createServer(app);


// Middleware
app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

connectDB();




// routes import 
const bookRoutes = require("./modules/book/book.routes")
const IssueAbookRoutes = require("./modules/issueBook/issueBook.routes")
const thesisRoutes = require("./modules/thesis/thesis.routes")
const userRoutes = require('./modules/user/user.routes')


// Routes
app.use("/api/books", bookRoutes);
app.use("/api/issueAbookRoutes", IssueAbookRoutes);
app.use("/api/thesis", thesisRoutes);
app.use("/api/user", userRoutes);

// Testing API
app.get("/", (req, res) => {
  res.send(`Api is working fine!`);
});

Server.listen(PORT, () => {
  console.log(`Server is Running PORT: ${PORT}`);
});
