import BaseError from '../errors/BaseError.js';
import User from '../model/userModel.js';

export const createUser = async (req, res) => {
  const user = await User.create({
    fullname: req.body?.fullname,
    email: req.body?.email,
    password: req.body?.password,
  });
  res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    userId: user._id,
  });
};

export const loginUser = async (req, res) => {
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

export const logoutUser = async (req, res) => {
  // console.log(req.session.cookie);
  req.session.destroy((err) => {
    if (err) throw new BaseError('Signout failed', 500);
    res.clearCookie('connect.sid');
    return res.json({
      status: 'success',
      message: 'Signout successful',
    });
  });
};
