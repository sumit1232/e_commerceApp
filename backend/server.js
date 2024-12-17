const express = require('express')
const app = express()

PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log("Server Running on",PORT);
    
})