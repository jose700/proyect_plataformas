const {Router} = require('express')
const {getReprobadas,
    getReprobadaMateria,
    crearReprobadas,
    eliminarReprobada
} = require('../../../controllers/seguimientos-academicos/asignaturas/reprobada');
const router = Router()





router.get('/reprobadas',getReprobadas);
router.get('/reprobadas/:nombre',getReprobadaMateria);
router.post('/reprobadas',crearReprobadas);
router.delete('/reprobadas/:idReprobada',eliminarReprobada);



module.exports = router;