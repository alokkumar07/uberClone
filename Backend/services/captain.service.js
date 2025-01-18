    const captainModel = require("../models/captain.model")

    module.exports.createCaptain = async ({firstname,lastname,email,password,color,plate,capacity,vechileType}) =>{

        if(!firstname || !email || !password || !color || !plate || !capacity || !vechileType){
            throw new Error('All fields required')
        }
        const captain = captainModel.create({
          fullname:{
            firstname,
            lastname,
          },
          email,
          password,
          vechile:{
            color,
            plate,
            capacity,
            vechileType
          }
        })
        return captain;
    }

