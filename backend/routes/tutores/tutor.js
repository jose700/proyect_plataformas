const {Router} = require('express');
const {getTutor,crearTutor} = require('../../controllers/tutores/register/tutor');
const {crearLogin} = require('../../controllers/tutores/login/tutor');


const router = Router();

router.get('/tutores',getTutor);
router.post('/tutores',crearTutor);
router.post('/logintutor',crearLogin)


module.exports = router;