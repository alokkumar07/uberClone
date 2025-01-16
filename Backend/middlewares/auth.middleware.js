const userModel = require('../models/user.model')
const blacklistTokenModel = require('../models/blacklistToken.model');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


module.exports.authUser = async (req, res, next) => {
    try {
        const token =
            req.cookies.token || 
            (req.headers.authorization && req.headers.authorization.startsWith('Bearer') 
                ? req.headers.authorization.split(' ')[1] 
                : null);

        // const { token } = req.cookies;

        if (!token) {
            console.error('Token not provided');
            return res.status(401).json({ message: 'Unauthorized'});
        }

        const isBlackListed = await blacklistTokenModel.findOne({ token:token });
        console.log('Blacklisted;', isBlackListed);

        if(isBlackListed){
          return  res.status(401).json({ message: 'unAuthorized' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);

        // Fetch user from the database
        const user = await userModel.findById(decoded._id);
        if (!user) {
            console.error('User not found for decoded token');
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        // Attach user to request object
        req.user = user;
        console.log('Authenticated user:', req.user);

        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        console.error('Error in authUser middleware:', error.message);
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
};
