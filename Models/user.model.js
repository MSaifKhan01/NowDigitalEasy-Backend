const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      },
      
      phoneNumber: {
        type: String,
        match: /^\d{10}$/,
      },
      
})

const UserModel=mongoose.model("User",UserSchema)

module.exports={UserModel}