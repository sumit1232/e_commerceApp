const router = require('express').Router()

router.post("/register",(req,res)=>{
    res.json({msg:"Register"})
})

module.exports = router