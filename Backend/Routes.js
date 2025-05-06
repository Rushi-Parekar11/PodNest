const router = require('express').Router();
const crypto = require('crypto');
const otpServices = require('./Services/otp.js')

router.post('/ping',(req,res)=>{
    res.send("done")
})

router.post('/api/sendotp',(req,res)=>{
    const {phone} = req.body;
    if(!phone){
        res.status(400).json({message:"Phone Number is required"});
    }
    const otp = otpServices.generateOtp();
    req.send(otp);
})


module.exports = router;