const jwt = require('jsonwebtoken');

const createToken = (body) => {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(body, secret);
  return token;
};

// const decodeToken = (body) => {
//   const secret = process.env.JWT_SECRET;
//   const decoded = jwt.verify(body, secret);
//   return decoded;
// };

module.exports = { createToken };