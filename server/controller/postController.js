const Post=require('../models/Post')

//to create
const addPost=async(req,res)=>{
    const{title,body}=req.body
    if(!title)
        return res.send('error in create post').status(404)
    const post=await Post.create({title,body})
    if(!post)
        return res.send('error in create post').status(404)
    const posts=await Post.find().lean()
     res.json(posts)
}

//to read all
const getAllPosts=async(req,res)=>{
    const posts=await Post.find().lean()
    if(!posts)
        return res.send('error in reading posts').status(404)
    res.json(posts)
}

//read byid:
const getByIdPost=async(req,res)=>{
    const{id}=req.params
    if(!id)
    return res.send('error in reading todos').status(404) 
    const post=await Post.findById(id).lean()
   if(!post)
    return res.send('error in reading posts').status(404)
res.json(post)
}

//update
const updatePost=async(req,res)=>{
    const{id,title,body}=req.body
    if (!id)
        return res.send('error with the id in update user').status(404)
    const post=await Post.findById(id).exec()
    if (!post)
        return res.send('error in update user').status(404)
    post.title=title
    post.body=body
    await(post.save())
    const posts=await Post.find().lean()
     res.json(posts)
}

//delete
const deletePost=async(req,res)=>{
    const{id}=req.params
    if (!id)
        return res.send('error in delete post').status(404)
    const post=await Post.findById(id)
    if (!post)
        return res.send('error in delete post').status(404)
    const deleted=await post.deleteOne()
    const posts=await Post.find().lean()
    res.json(posts)
}
module.exports={addPost,getAllPosts,getByIdPost,deletePost,updatePost}