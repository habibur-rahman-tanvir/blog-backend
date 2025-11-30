/* eslint-disable import/extensions */
import User from '../model/userModel.js';

const signupController = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

export default signupController;
