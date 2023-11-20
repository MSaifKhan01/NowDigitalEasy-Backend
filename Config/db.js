const mongoose=require("mongoose")

require("dotenv").config()

const Connection=mongoose.connect(process.env.Url)

module.exports={Connection}