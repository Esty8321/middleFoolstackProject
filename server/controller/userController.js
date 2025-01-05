const User = require('../models/User')

//create://checked
const addUser = async (req, res) => {
    const { name, email, address, phone ,password,username} = req.body
    if (!name)
        return res.send('error in details of create User').status(404)

    const user = await User.create({ name, email, address, phone ,password,username})
    if (!user)
        return res.send('error in create User').status(404)
    const users = await User.find().lean()//only for reading
    if (!users)
        return res.send('error in reading users')
    res.json(users)
}
//read all//cheked
const getAllUsers = async (req, res) => {
    const users = await User.find().lean()//only for reading
    if (!users)
        return res.send('error in reading users')
    res.json(users)
}

//read byid//checked
const getByIdUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).lean()//only for reading exec use when i need do some acts on the objects
    if (!user)
        return res.send('error in reading user by id')
    res.json(user)
}

//update//checked
const updateUser = async (req, res) => {
    const { id, name, address, phone, email } = req.body
    if (!id)
        return res.send('error with the id in update user').status(404)
    const user = await User.findById(id).exec()
    if (!user)
        return res.send('error in update user')
    name?user.name= name:user.name
    address?user.address = address:user.address
    phone?user.phone = phone: user.phone
   email?user.email = email:user.email
    await(user.save())
    const users = await User.find().lean()//only for reading
    if (!users)
        return res.send('error in reading users')
    res.json(users)
}

//delete

const deleteUser = async (req, res) => {
    const { id } = req.params
    if (!id)
        return res.send('error in delete user').status(404)
    const user = await User.findById(id)
    if (!user)
        return res.send('error in delete user').status(404)
    const deleted = await user.deleteOne()
    const users = await User.find().lean()//only for reading
    if (!users)
        return res.send('error in reading users')
    res.json(users)
}

module.exports = { addUser, deleteUser, updateUser, getByIdUser, getAllUsers }