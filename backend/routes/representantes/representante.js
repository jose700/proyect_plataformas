const {Router} = require('express')
const {getRepresentantes,getRepresentanteCedula,crearRepresentantes,
    eliminarRepresentante
} = require('../../controllers/representantes/representante')
const router = Router();


router.get('/representantes',getRepresentantes);
router.get('/representantes/:cedula',getRepresentanteCedula);
router.post('/representantes',crearRepresentantes);
router.delete('/representantes/:idRepresentante',eliminarRepresentante);

module.exports = router;