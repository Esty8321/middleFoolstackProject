const express=require('express')
const postController=require('../controller/postController')
const router=express.Router()


router.post('/',postController.addPost)
router.get('/:id',postController.getByIdPost)
router.get('/',postController.getAllPosts)
router.delete('/:id',postController.deletePost)
router.put('/',postController.updatePost)
module.exports=router

