import express from 'express';
import setRateLimit from '../middleware/rateLimit.js';
import { createUser, loginUser, logoutUser } from '../controller/authController.js';

const router = express.Router();

router.post('/signup', setRateLimit(5, 60), createUser);
router.post('/signin', setRateLimit(3, 12), loginUser);
router.post('/signout', logoutUser);

export default router;
