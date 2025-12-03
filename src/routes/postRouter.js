import express from 'express';
import isAuth from '../middleware/isAuth.js';
import { createPost, deletePost } from '../controller/postController.js';

const router = express.Router();

router.post('/', isAuth, createPost);
router.delete('/:postId', isAuth, deletePost);

export default router;
