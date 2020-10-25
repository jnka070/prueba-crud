const express= require('express');
const router=express.Router();
const cuscontroller=require('../controllers/customercontrollers');

router.get('/',cuscontroller.list);
router.post('/register', cuscontroller.save);
router.get('/delete/:id', cuscontroller.delete);

router.get('/update/:id', cuscontroller.edit);
router.post('/update/:id', cuscontroller.update);
module.exports=router;