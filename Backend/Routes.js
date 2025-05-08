const router = require('express').Router();
const crypto = require('crypto');
const otpServices = require('./Services/otp.js')

router.post('/ping',(req,res)=>{
    res.send("done")
})

router.post('/api/sendotp',async(req,res) =>{
    const {phone} = req.body;
    if(!phone){
        res.status(400).json({message:"Phone Number is required"});
    }
    const otp = await otpServices.generateOtp();

    //hashing the otp
    const ttl = 1000 * 60 * 2;
    const expire = Date.now() + ttl;
    const data = `${phone}.${otp}.${expire}`;
    const hash = otpServices.hashOtp(data)
    res.json({
        hash
    });

})


module.exports = router;