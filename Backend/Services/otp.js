const crypto = require('crypto');


class otpServices{
    async generateOtp(){
        const otp = crypto.randomInt(1000,9999);
        return otp;
    }

    sendBySms(){

    }

    verfiyOtp(){

    }

    hashOtp(data){
        return crypto.createHmac('sha256' , 'rushi').update(data).digest('hex');
    }

}

module.exports = new otpServices();