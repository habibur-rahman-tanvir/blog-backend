import express from 'express';
import isAuth from '../middleware/isAuth.js';

const router = express.Router();

router.get('/', isAuth, (req, res) => {
  res.send('Profile');
});

export default router;
