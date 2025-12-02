import User from '../model/userModel.js';

const signupController = async (req, res) => {
  const user = await User.create({
    fullname: req.body?.fullname,
    email: req.body?.email,
    password: req.body?.password,
  });

  res.status(201).json({
    status: 'success',
    message: 'user created successfully',
    userId: user._id,
  });
};

export default signupController;
