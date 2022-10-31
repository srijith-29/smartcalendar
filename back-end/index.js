const express = require('express')
const cors = require('cors')
// const mysql = require('mysql')
const app = express()
app.use(express.json())
app.use(cors())

const route = require('./routes/router.js')
const res = require("express/lib/response");

app.use('/api', route)
app.get("/",(req,res)=>res.send("Smart Calendar"))

const port = process.env.port || 3030

app.listen(port,()=>{console.log("Server running on port 3030")})