import express from 'express';
import signupController from '../controller/signupController.js';
import signinController from '../controller/signinController.js';
import signoutController from '../controller/signoutController.js';
import setRateLimit from '../middleware/rateLimit.js';

const router = express.Router();

router.post('/signup', setRateLimit(5, 60), signupController);
router.post('/signin', setRateLimit(3, 12), signinController);
router.post('/signout', signoutController);

export default router;
