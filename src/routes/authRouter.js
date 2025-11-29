import express from 'express';

const router = express.Router();

router.post('/signup', (req, res) => {
  res.send('Sign up');
});

router.post('/signin', (req, res) => {
  res.send('Sign in');
});

router.post('/signout', (req, res) => {
  res.send('Sign out');
});

export default router;
