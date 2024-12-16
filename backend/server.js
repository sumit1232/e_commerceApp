const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);


// connect MONGDB

const URI = process.env.MONGO_URL;

mongoose.connect(URI).then(()=>{
    console.log("MONGODB CONNECTED");
})