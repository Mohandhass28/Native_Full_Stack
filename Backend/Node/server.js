const express = require("express");
const app = express()

app.use(express.json())

const dataRouter = require("./Routes/data")

app.use("/data", dataRouter)

app.listen(5000, ()=>{
    console.log("Api running")
})