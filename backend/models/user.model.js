const mongoose = require('mongoose');
 const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    email:{
        type:String,
    }
 },{
    timestamps: true
 })

 module.exports= mongoose.model("User",userSchema)