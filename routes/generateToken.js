const express = require('express');
const router = express.Router();
const tokenController = require('../controller/tokenController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/generateToken', (req, res) => {
  const resData = tokenController.createToken(req.body);
  console.log("resData");
  res.send({"token":resData});
});

router.get('/decodeToken',authMiddleware, (req, res) => {
    console.log("hyyy",req.headers.token)
  const resData = tokenController.decodeToken(req.headers.token);
  res.send(resData);
});

module.exports = router;