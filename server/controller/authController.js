const User=require('../models/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()

//the login
const login=async(req,res)=>{
  const {username,password}=req.body
  if(!username||!password)
    return res.status(400).send('error in login')
const foundUser=await User.findOne({username}).lean()
if(!foundUser)
    return res.status(400).send('error in login')
const match=await bcrypt.compare(password,foundUser.password)
if(!match)
    return res.status(400).send('error in login')

//object that contain the details of the user without the password
const userInfo={_id:foundUser._id,name:foundUser.name,
    username:foundUser.username,email:foundUser.email}

    const accessToken=jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
res.json({accessToken:accessToken})
}  

//the register
const register=async(req,res)=>{
    const{username,password,name,email,phone}=req.body
    if(!name||!username||!password)
        return res.status(400).send('error in register')
    const duplicate=await User.findOne({username:username}).lean()
    if(duplicate)
        return res.status(400).send('error in register')
   
    const hashedPwd=await bcrypt.hash(password,10)
    const userObject={name,email,username,phone,password:hashedPwd}
    const user=await User.create(userObject)
    if(user)
        return res.status(201).send('suceed to create user')
    else
    return res.status(400).send('didnt suceed create user')
}
module.exports={login,register}