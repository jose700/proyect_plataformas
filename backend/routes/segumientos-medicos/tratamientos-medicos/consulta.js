const {Router} = require('express')
const {getTratamientos,getTratamientoEstudiante,crearTratamientos,
eliminarTratamiento
} = require('../../../controllers/seguimientos-medicos/tratamientos-medicos/consulta')
const router = Router()


router.get('/tratamientos',getTratamientos);
router.get('/tratamientos/:nombres',getTratamientoEstudiante);
router.post('/tratamientos',crearTratamientos);
router.delete('/tratamientos/:idTratamiento',eliminarTratamiento);



module.exports = router;

