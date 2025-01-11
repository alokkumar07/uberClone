const express = require('express');
const router = express.Router();

const {body} = require("express-validator")

const userController = require("../controllers/user.controller")

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage("first Name must be at least 3 characters"),
    body('password').isLength({min:5}).withMessage("password must be at least 5 characters")
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:5}).withMessage("password Invalid")
],
userController.loginUser
)




module.exports = router; 