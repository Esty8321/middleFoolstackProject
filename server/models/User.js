const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }, 
    name:{type:String,
        required:true
    },
    email:{type:String},
    address:{type:String},
    phone:{type:String}
})

module.exports=mongoose.model('User',userSchema)