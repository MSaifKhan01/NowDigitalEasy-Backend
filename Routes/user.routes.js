const express=require("express")
const { AddUser, AllUser, SingleUser } = require("../Controllers/user.controllers")


const UserRouter=express.Router()


UserRouter.post("/AddUser",AddUser)

UserRouter.get("/AllUsers",AllUser)


UserRouter.get("/SingleUser/:id",SingleUser)


module.exports={UserRouter}