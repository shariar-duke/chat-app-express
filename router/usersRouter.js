const express = require("express");


// internal imports 
const {getUsers} = require("../controller/usersController");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUserValidators, addUserValidationHandler ,  } = require("../middlewares/users/userValidator");

const router = express.Router();

// login page 
router.get("/", getUsers )

// add user 
router.post("/", avatarUpload , addUserValidators , addUserValidationHandler)


module.exports = router;