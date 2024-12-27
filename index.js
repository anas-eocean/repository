const express = require('express');
const mongoose = require('mongoose')
const modal=require("./modals/modal")
require("dotenv").config()
const hostRoute = require("./routes/host")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const port = 3000;

app.use("/",hostRoute)

mongoose.connect(process.env.MONGO_CONN_STR)
.then(()=>{
  console.log("u have connected to the database")
  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  });
  
}).catch((error)=>{
  console.log("coneection failed")
})