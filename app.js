const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Database connection error:", err));

console.log("App Name:", process.env.APP_NAME);
