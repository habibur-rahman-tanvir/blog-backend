import express from 'express';
import signupController from '../controller/signupController.js';
import signinController from '../controller/signinController.js';
import signoutController from '../controller/signoutController.js';

const router = express.Router();

router.post('/signup', signupController);
router.post('/signin', signinController);
router.post('/signout', signoutController);

export default router;
