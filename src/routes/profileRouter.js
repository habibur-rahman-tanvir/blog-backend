import express from 'express';
import isAuth from '../middleware/isAuth.js';
import profileController from '../controller/profileController.js';

const router = express.Router();

router.get('/', isAuth, profileController);

export default router;
