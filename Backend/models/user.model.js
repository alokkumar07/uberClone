const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: 'string',
            required: true,
            minlength:[3,'firstname must be at least 3 characters']
        },
        lastname:{
            type: 'string',
            minlength:[3,'lastname must be at least 3 characters']
        },
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
        minlength:[5,'Email must be at least 5 characters long']

    },
    password:{
        type: 'string',
        required: true,
        select:false
    },
    socketId:{
        type: 'string',
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"24h"});
    return token
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('user',userSchema);

module.exports =userModel