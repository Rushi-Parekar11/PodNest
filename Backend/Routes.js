const router = require('express').Router();

router.get('/api/sendotp',(req,res)=>{
    res.send("done")
})

router.get('/ping',(req,res)=>{
    res.send("done")
})

module.exports = router;