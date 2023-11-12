const {Router} = require('express')
const {getNoCumplidos,
crearNoCumplidos,
eliminarNoCumplido
} = require('../../../controllers/seguimientos-medicos/tratamientos-medicos/nocumplido')
const router = Router()



router.get('/nocumplidos',getNoCumplidos);
router.post('/nocumplidos',crearNoCumplidos);
router.delete('/nocumplidos/:idNocumplido',eliminarNoCumplido);


module.exports = router;