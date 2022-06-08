import express from 'express';
import user from './controller/userController.js';
import login from  './controller/loginController.js';
import professions from './controller/professionsController.js';
import patient from './controller/patientController.js';
import specialist from './controller/specialistController.js';


const router = express.Router();

router.use('/user', user);
router.use('./login', login);
router.use('./professions', professions);
router.use('./patient', patient);
router.use('./specialist', specialist);

export default router;