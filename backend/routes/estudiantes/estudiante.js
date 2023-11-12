const {Router} = require('express');
const {getEstudiantes, crearEstudiante, getEstudianteCedula,
eliminarEstuiante
} = require('../../controllers/estudiantes/estudiante');


const router = Router();

router.get('/estudiantes',getEstudiantes);
router.get('/estudiantes/:cedula',getEstudianteCedula);
router.post('/estudiantes',crearEstudiante);
router.delete('/estudiantes/:idEstudiante',eliminarEstuiante);

module.exports = router;
