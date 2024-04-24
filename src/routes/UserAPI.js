const express = require('express')
const router = express.Router();
const {UserRegister, UserLogin, OTPRequest, OTPVerified, ResetPassword, UpdateProfile, UpdateProfileByAdmin, ReadUser} = require('../controller/UserController');

router.post('/register', UserRegister)
router.post('/login', UserLogin)
router.post('/otp-request', OTPRequest)
router.post('/otp-verified', OTPVerified)
router.post('/reset-password', ResetPassword)
router.post('/update-profile/:id', UpdateProfile)
router.post('/update-profileByAdmin/:id', UpdateProfileByAdmin)
router.post('/read-users', ReadUsers)
router.post('/read-user/:id', ReadUser)


module.exports = router;