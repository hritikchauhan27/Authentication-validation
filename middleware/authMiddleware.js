const jwt = require('jsonwebtoken');

const tokenController = require('../controller/tokenController');

const authenticate = (req, res, next) => {
    try {
    
    console.log("Inside auth middleware");

    const token = req.body.token;
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    req.user = decoded; //req.user is nothing but a custom key of req object
    return decoded;
    next();
  } catch (error) {
    console.log("Error happened - give right token");
    return res.status(401).json({
        message: 'Invalid or expired token'
      });
    
  }
};

module.exports = authenticate;