import BaseError from '../errors/BaseError.js';
import User from '../model/userModel.js';

const signinController = async (req, res) => {
  const { email, password } = req.body || {};
  const user = await User.findOne({ email }).select('fullname email password role');

  if (!user || !(await user.isValidPassword(password))) {
    throw new BaseError('Invalid cradintial', 401);
  }

  req.session.user = {
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
    role: user.role,
  };

  res.json({
    status: 'success',
    message: 'Signin successful',
  });
};

export default signinController;
