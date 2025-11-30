import express from 'express';
import signupController from '../controller/signupController.js';

const router = express.Router();
router.post('/signup', signupController);

router.post('/signin', (req, res) => {
  res.send('Sign in');
});

router.post('/signout', (req, res) => {
  res.send('Sign out');
});

export default router;
