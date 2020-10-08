require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")


// Routers

const moviesAll =  require("./routs/movies")

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true ,useUnifiedTopology: true } )
const db = mongoose.connection
db.on('error',(error)=>{console.error(error)})


app.use(moviesAll)

app.use(express.json())
const moviesRout = require('./routs/movies');

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server started")
})