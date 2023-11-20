const { UserModel } = require("../Models/user.model")


// For Adding User
const AddUser= async(req,res)=>{
    const {name,role,email,phoneNumber}=req.body

    try {

        if(!name||!email||!phoneNumber){
            return res.status(400).send({"msg":"You need to Fill All Fields "})
        }
        const user = await UserModel.findOne({ email });
        // console.log(user)
        if(user){
            return res.status(409).send({"msg":"User already exists"});
        }

        const newUser= new UserModel({name,role,email,phoneNumber})
         newUser.save()
         return res.status(201).send({"msg":"user added succesfull"})
        
    } catch (error) {

        return res.status(500).send({"msg":error.message})
    
    }

}

// For Getting All Users
const AllUser= async(req,res)=>{
    try {
        const users = await UserModel.find();
        if(users.length===0){
            return res.status(404).json({ "msg": "Any Users not  Found" });
        }
        // console.log(users)
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({"msg":error.message})
    }
}

// For Getting particular user
const SingleUser=async(req,res)=>{
    const {id}=req.params
    try {
        
        const user= await UserModel.findById({_id:id})

        if (!user) {
            return res.status(404).json({ "msg": "User not Found" });
        }
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({"msg":error.message})
    }
}

// For Deleting a User
const RemoveUser=async(req,res)=>{
    const {id}=req.params

    try {
        const DeleteUser =await UserModel.findByIdAndDelete({_id:id})
        // console.log(DeleteUser)
        if(!DeleteUser){
            return res.status(404).send({"msg":"User Not Found"})
        }

        return res.status(200).send({"msg":"User Deleted Succesfully",DeleteUser})
      // with 204(For Deletion Status code) status code you will not get any response thats why I used 200 status code in above

    } catch (error) {

        return res.status(500).send({"msg":error.message})
        
    }
}

// For Updating a User
const UpdateUser= async(req,res)=>{
    const {id}=req.params
    const {name,role,email,phoneNumber}=req.body

    try {
        const UpdateData= await UserModel.findByIdAndUpdate({_id:id},{name,role,email,phoneNumber})

    if(!UpdateData){
        return res.status(404).send({"msg":"User Not Found"})

    }

    return res.status(200).send({"msg":"User Data Updated",UpdateData})
        
    } catch (error) {
        return res.status(500).send({"msg":error.message})
    }
}




module.exports={AddUser,AllUser,SingleUser,RemoveUser,UpdateUser}