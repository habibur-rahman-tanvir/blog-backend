import BaseError from '../errors/BaseError.js';
import Post from '../model/postModel.js';

export const createPost = async (req, res) => {
  const body = req.body || {};
  const post = await Post.create({
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

export const deletePost = async (req, res) => {
  const deletedPost = await Post.findOneAndDelete({
    _id: req.params.postId,
    author: req.session.user._id,
  });
  if (!deletedPost) throw new BaseError('Post not found for delete!', 404);
  res.status(204).end();
};
