const express=require("express")
const { AddUser, AllUser, SingleUser, RemoveUser, UpdateUser } = require("../Controllers/user.controllers")


const UserRouter=express.Router()


UserRouter.post("/AddUser",AddUser)

UserRouter.get("/AllUsers",AllUser)


UserRouter.get("/SingleUser/:id",SingleUser)

UserRouter.delete("/RemoveUser/:id",RemoveUser)


UserRouter.put("/UserUpdate/:id",UpdateUser)

module.exports={UserRouter}