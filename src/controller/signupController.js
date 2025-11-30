/* eslint-disable import/extensions */
import User from '../model/userModel.js';

const signupController = async (req, res) => {
  const user = await User.create({ ...req.body, role: 'user' });
  res.status(201).json({
    status: 'success',
    message: 'user created successfully',
    userId: user._id,
  });
};

export default signupController;
