const express=require("express")

const cors=require("cors")
const dotenv=require("dotenv")
const { Connection } = require("./Config/db")
const { UserRouter } = require("./Routes/user.routes")

const app=express()

app.use(cors())
app.use(express.json())
dotenv.config()

app.get("/",(req,res)=>{
    res.status(200).send("welcome")
})

app.use("/user",UserRouter)

app.listen(process.env.port,async()=>{

    try {
        await Connection
        console.log("connected DB")

    } catch (error) {
        console.log(err)
    }
    console.log("connected")
})