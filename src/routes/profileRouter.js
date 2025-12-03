import express from 'express';
import isAuth from '../middleware/isAuth.js';
import { profileInfo, profilePosts } from '../controller/profileController.js';

const router = express.Router();

router.get('/', isAuth, profileInfo);
router.get('/post', isAuth, profilePosts);

export default router;
