const {Router} = require('express')
const {getAsignaturas,
getAsignaturaCedula,
crearAsignatura,
eliminarAsignatura
} = require('../../../controllers/seguimientos-academicos/asignaturas/asignatura')
const router = Router()





router.get('/materias',getAsignaturas);
router.get('/materias/:cedula',getAsignaturaCedula);
router.post('/materias',crearAsignatura);
router.delete('/materias/:idMateria',eliminarAsignatura);




module.exports = router;