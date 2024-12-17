const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()


PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log("Server Running on",PORT);
})


app.use('/user',require('./routes/userRouter.js'))
//Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(() => console.log('Connected!')).catch(()=>{
    console.log("Databse Connection Failed...");
    
  })
