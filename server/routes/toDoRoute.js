const express=require('express')
const toDosController=require('../controller/toDosController')
const router=express.Router()

router.post('/',toDosController.addToDos)
router.get('/',toDosController.getAllToDos)
router.get('/:id',toDosController.getByIdToDos)
router.put('/',toDosController.updateTodos)
router.delete('/:id',toDosController.deleteTodos)

module.exports=router