const {Router} = require('express')
const {getAprobadas,
getAprobadaMateria,
crearAprobadas,
eliminarAprobada
} = require('../../../controllers/seguimientos-academicos/asignaturas/aprobada')
const router = Router()





router.get('/aprobadas',getAprobadas);
router.get('/aprobadas/:nombre',getAprobadaMateria);
router.post('/aprobadas',crearAprobadas);
router.delete('/aprobadas/:idAprobada',eliminarAprobada);



module.exports = router;