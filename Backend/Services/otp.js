const crypto = require('crypto');

class otpServices{
    generateOtp(){
        const otp = crypto.randomInt(1000,9999);
        return otp;
    }

    sendBySms(){

    }

    verfiyOtp(){

    }

}

module.exports = new otpServices();