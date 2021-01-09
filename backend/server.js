const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// To create express server.
const app = express();
const port = process.env.PORT || 5000;

// Middleware. Parse JSON.
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Starts the port and listens on port.
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
