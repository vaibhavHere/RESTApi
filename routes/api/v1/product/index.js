const express=require('express');
const router=express.Router();
const productController=require('../../../../controllers/productController')


router.get('/',(req,res) => res.send('You are now into product page. You can now perform CRUD operations from here'))
router.get('/read',productController.readData)
router.get('/read/:id',productController.readDataById)
router.post('/create',productController.create)
router.patch('/update/:id',productController.updateById)
router.delete('/delete/:id',productController.deleteById)

module.exports=router;