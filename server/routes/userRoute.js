const express=require('express')
const userController=require('../controller/userController')

const router=express.Router()
//to delete after:

router.post('/',userController.addUser)//to create
router.get('/',userController.getAllUsers)//to read all
router.get('/:id',userController.getByIdUser)//to read one
router.put('/',userController.updateUser)//to update
router.delete('/:id',userController.deleteUser)//to delete one user


module.exports=router