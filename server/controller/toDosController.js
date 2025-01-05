const ToDos=require('../models/ToDos')

//to create
const addToDos=async(req,res)=>{
const{title,tags}=req.body
if(!title)
    return res.send('error in create todos').status(404)
const todo=await ToDos.create({title,tags})
if(!todo)
    return res.send('error in create todos').status(404)
const todos=await ToDos.find().lean()
res.json(todos)
}

//to read all
const getAllToDos=async(req,res)=>{
const todos=await ToDos.find()
if(!todos)
    return res.send('error in reading todos').status(404) 
res.json(todos)
}

//to read byid
const getByIdToDos=async(req,res)=>{
    const {id}=req.params
    if(!id)
    return res.send('error in reading todos byid').status(404) 
    const todo=await ToDos.findById(id)
    if(!todo)
    return res.send('error in reading todos byid').status(404) 
res.json(todo)
}


//update
const updateTodos=async(req,res)=>{
    const{id,title,tags,completed}=req.body
    if(!id)
        return res.send('error with the id in update todo').status(404)
    const todo=await ToDos.findById(id).exec()
    if(!todo)
        return res.send('error with the id in update todo').status(404)
todo.title=title
todo.tags=tags
todo.completed=completed
const todosave=await todo.save()
if(!todosave)
    return res.send('error with the id in update todo').status(404)

const todos=await ToDos.find().lean()
res.json(todos)
}

//delete
const deleteTodos=async(req,res)=>{
    const{id}=req.params
    if(!id)
        return res.send('error with the id in delete todo').status(404)
const deleted=await ToDos.findById(id)
if(!deleted)
    return res.send('error with the id in delete todo').status(404)

const result=await deleted.deleteOne()
if(!result)
    return res.send('didnt deleted')
const todos=await ToDos.find().exec()
// if(todos)
//     return res.json(todos)
// res.send('there is any todo')
res.json(todos)
}

module.exports={deleteTodos,updateTodos,getByIdToDos,getAllToDos,addToDos}