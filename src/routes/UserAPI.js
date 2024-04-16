const express = require('express')
const router = express.Router();
const {UserRegister} = require('../controller/UserController');

router.post('/register', UserRegister)



module.exports = router;