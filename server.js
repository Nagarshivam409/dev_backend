const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors')
const connectDB = require("./config/db");
const path = require("path");
// connect db
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


connectDB();
// middleware
app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    allowedHeaders: "*",
    credentials: true,
  })
);


app.use(express.json({ extended: false })); // to get body data similar to body parser

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));




