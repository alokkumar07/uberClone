const mongoose  = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type: 'string',
        required: true,
        unique: true
    },
    createAt:{
        type:Date,
        default:Date.now(),
        expires:86400  //24 hrs
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);