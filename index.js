// require("dotenv").config()
const express = require("express")
var cors = require('cors')
//require("./db")
const app = express()
const connectDB = require('./conn/conn');

const PORT = process.env.PORT || 5000

 
app.use(cors())
app.use(express.json())

// Available Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.get("/api/v1/login", (req, res)=>{
    res.send("Hello login")
})

app.get("/api/v1/signup", (req, res)=>{
    res.send("Hello signup!")
})

app.listen(PORT,()=>{
    console.log(`Example app listening at ${PORT}`)
})
