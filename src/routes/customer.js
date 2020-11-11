const express = require('express');
const router = express.Router();
const cuscontroller = require('../controllers/customercontrollers');

router.get('/register', cuscontroller.list);
router.post('/register', cuscontroller.save);
router.get('/delete/:id', cuscontroller.delete);

router.get('/update/:id', cuscontroller.edit);
router.post('/update/:id', cuscontroller.update);

router.post('/search', cuscontroller.search);
module.exports = router;