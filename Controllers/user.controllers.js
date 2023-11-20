const { UserModel } = require("../Models/user.model")



const AddUser= async(req,res)=>{
    const {name,role,email,phoneNumber}=req.body

    try {
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
        // return res.status(500).send({"msg": error.message});

        
    }

}

const AllUser= async(req,res)=>{
    try {
        const users = await UserModel.find();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({"msg":error.message})
    }
}

const SingleUser=async(req,res)=>{
    const {id}=req.params
    try {
        const user= await UserModel.find({_id:id})
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({"msg":error.message})
    }
}


module.exports={AddUser,AllUser,SingleUser}