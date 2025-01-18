const captainModel = require("../models/captain.model")
const captainService = require("../services/captain.service")
const  { validationResult } = require("express-validator")

module.exports.registerCaptain = async (req, res, next) => {
   const error = validationResult(req)
    if(!error.isEmpty()){
         return res.status(400).json({error: error.array()})
    }

    const {fullname,email,password,vechile} = req.body;
    const isCaptainAlreadyExits = await captainModel.findOne({email});
    if(isCaptainAlreadyExits){
        return res.status(400).json({message:"Captain already exists"})
    }
    console.log(req.body)

    const hashedpassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedpassword,
        color:vechile.color,
        plate:vechile.plate,
        capacity:vechile.capacity,
        vechileType:vechile.vechileType
    });

    const token = captain.generateAuthToken();

    res.status(200).json({token,captain})
}