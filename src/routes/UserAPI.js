const express = require('express')
const router = express.Router();
const {UserRegister, UserLogin, OTPRequest, OTPVerified, ResetPassword, UpdateProfile, UpdateProfileByAdmin, ReadUsers, ReadUser, DeleteUser} = require('../controller/UserController');
const { VerifyToken } = require('../middleware/UserAuth');

router.post('/register', UserRegister)
router.post('/login', UserLogin)
router.post('/otp-request', OTPRequest)
router.post('/otp-verified', OTPVerified)
router.post('/reset-password', ResetPassword)

router.post('/update-profile/:id', VerifyToken, UpdateProfile)
router.post('/update-profileByAdmin/:id', VerifyToken, UpdateProfileByAdmin)
router.post('/read-users', VerifyToken, ReadUsers)
router.post('/read-user/:id', VerifyToken, ReadUser)
router.delete('/user-delete', VerifyToken, DeleteUser)


module.exports = router;