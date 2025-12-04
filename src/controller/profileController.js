import BaseError from '../errors/BaseError.js';
import User from '../model/userModel.js';
import Blog from '../model/blogModel.js';

export const createBlog = async (req, res) => {
  const body = req.body || {};
  const post = await Blog.create({
    tittle: body.tittle,
    subTittle: body.subTittle,
    description: body.description,
    mode: body.mode,
    author: req.session.user._id,
  });
  res.status(201).json({
    status: 'success',
    message: 'Post created successfully',
    id: post._id,
  });
};

export const getAllBlog = async (req, res) => {
  const blogs = await Blog.find({ author: req.session.user._id }).lean();
  res.json(blogs);
};

export const deleteBlog = async (req, res) => {
  const deletedBlog = await Blog.findOneAndDelete({
    _id: req.params.blogId,
    author: req.session.user._id,
  });
  if (!deletedBlog) throw new BaseError('Blog not found for delete!', 404);
  res.status(204).end();
};

export const profileInfo = async (req, res) => {
  const user = await User.findById(req.session.user._id)
    .select('fullname email role isVerified')
    .lean();
  if (!user) throw new BaseError('Profile not found', 404);
  res.json(user);
};
