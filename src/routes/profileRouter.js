import express from 'express';
import {
  createBlog,
  deleteBlog,
  getAllBlog,
  profileInfo,
} from '../controller/profileController.js';

const router = express.Router();

router.post('/blog', createBlog);
router.get('/blog', getAllBlog);
router.delete('/blog/:blogId', deleteBlog);
router.get('/', profileInfo);

export default router;
