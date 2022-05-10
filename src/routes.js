import express from 'express';
import user from './controller/userController.js';
import login from  './controller/loginController.js';

const router = express.Router();

router.use('/user', user);
router.use('./login', login);

export default router;