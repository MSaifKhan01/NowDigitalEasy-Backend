const express=require("express")
const { AddUser, AllUser, SingleUser, RemoveUser } = require("../Controllers/user.controllers")


const UserRouter=express.Router()


UserRouter.post("/AddUser",AddUser)

UserRouter.get("/AllUsers",AllUser)


UserRouter.get("/SingleUser/:id",SingleUser)

UserRouter.delete("/RemoveUser/:id",RemoveUser)


module.exports={UserRouter}