const express = require('express')
const router = express.Router()
const schema= require('../middleware/userValidator');
const userController = require('../controller/userController');

router.post('/register',(req, res)=>{
    const{error, value} = schema.validate(req.body);
    if(error){
        res.status(406).send(error.details[0].message); //details method is of joi which returns a string with an annotated version of the object pointing at the places where errors occurred
    } else{
        userController.createUser(req,res);
    }
});

router.get('/', userController.getUsers);

router.patch('/:name', (req, res) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      userController.updateUser(req, res);
    }
});



module.exports = router;