const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal exports 
const {notFoundHandler, errorHandler } = require("./middlewares/common/errorHandler")
 
const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Database connection error:", err));


  // request parseers 
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  // set view engine 
  app.set("view engine", "ejs")


// Set the static folder
app.use(express.static(path.join(__dirname, "public")));


// parse cookies 
app.use(cookieParser(process.env.COOKIE_SECRET));


// routing setup 


//404 not found handler 
app.use(notFoundHandler)

// common error handler
app.use(errorHandler)


app.listen(process.env.PORT, ()=>  {
    console.log(`app listening to port ${process.env.PORT}`)
})
