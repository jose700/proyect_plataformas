const {Router} = require('express')
const {getCumplidos,getCumplidosCedula,crearCumplidos,
eliminarCumplido
} = require('../../../controllers/seguimientos-medicos/tratamientos-medicos/cumplido')
const router = Router()



router.get('/cumplidos',getCumplidos);
router.get('/cumplidos/:cedula',getCumplidosCedula);
router.post('/cumplidos',crearCumplidos);
router.delete('/cumplidos/:idCumplido',eliminarCumplido);


module.exports = router;

