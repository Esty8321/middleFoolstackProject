const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI)
    }
    catch(err)
    {
        console.log('dont secceed to connect to the database')
    }
}

module.exports=connectDB