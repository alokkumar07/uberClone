    const captainModel = require("../models/captain.model")

    module.exports.createCaptain = async ({firstname,lastname,email,password,color,plate,capacity,vechileType}) =>{

        if(!firstname || !email || !password || !color || !plate || !capacity || !vechileType){
            const missingFields = [];
            if (!firstname) missingFields.push("firstname");
            if (!email) missingFields.push("email");
            if (!password) missingFields.push("password");
            if (!color) missingFields.push("color");
            if (!plate) missingFields.push("plate");
            if (!capacity) missingFields.push("capacity");
            if (!vechileType) missingFields.push("vechileType");
            throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
          
            // throw new Error('All fields required')
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

