const express = require('express');
const router = express.Router();

const logincontroll = require('../controllers/logincontrollers');

router.get('/', logincontroll.paginainicio);
router.get('/registraruser', logincontroll.listar)
router.post('/', logincontroll.guardarusuario);

router.get('/updateUser/:id', logincontroll.ediUser);
router.post('/updateUser/:id', logincontroll.actualizarUser);

router.get('/deleteUser/:id', logincontroll.borrar);

router.get('/', logincontroll.logearse)


module.exports = router;