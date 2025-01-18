const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const captainController = require("../controllers/captain.controller")

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage("first Name must be at least 3 characters"),
    body('password').isLength({min:5}).withMessage("password must be at least 5 characters"),
    body('vechile.color').isLength({min:3}).withMessage("color must be at least 3 characters"),
    body('vechile.plate').isLength({min:3}).withMessage("plate must be at least 3 characters"),
    body('vechile.capacity').isLength({min:1}).withMessage("capacity must be at least 1"),
    body('vechile.vechileType').isIn(['car', 'van', 'bike']).withMessage("vechile must be car, van or bike")
],
captainController.registerCaptain
)


module.exports = router