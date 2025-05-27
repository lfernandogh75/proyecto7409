/**
 * Vamos a crear rutas del servidor
 * creamos un m�dulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para 
 * enviar y recibir datos en formato json
 */
 const express = require('express');
 const router = express.Router();
 /* generamos un ejemplo cuando le soliciten 
 algo al servidor por el m�todo GET **/  
 const empleadoCtrl = require('../controllers/empleado.controller'); // importamos el controlador
router.get('/', empleadoCtrl.getEmpleados); // obtenemos todos los empleados
 router.get('/', (req, res) => {  
                                
    res.json({
         status: 'API REST funcionando'
     });
 })  
 module.exports = router;
