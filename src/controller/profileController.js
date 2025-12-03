import BaseError from '../errors/BaseError.js';
import User from '../model/userModel.js';

export const profileInfo = async (req, res) => {
  const user = await User.findById(req.session.user._id)
    .select('fullname email role isVerified')
    .lean();
  if (!user) throw new BaseError('Profile not found', 404);
  res.json(user);
};

export const profilePosts = async (req, res) => {
  res.send('All post from your profile');
};
