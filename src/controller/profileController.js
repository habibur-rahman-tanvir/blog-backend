import BaseError from '../errors/BaseError.js';
import User from '../model/userModel.js';

const profileController = async (req, res) => {
  const user = await User.findById(req.session.user._id)
    .select('fullname email role isVerified')
    .lean();
  if (!user) throw new BaseError('Profile not found', 404);
  res.json(user);
};

export default profileController;
