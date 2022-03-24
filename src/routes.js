import express from 'express';
import user from './controller/userController.js';

const router = express.Router();

router.use('/user', user);

export default router;