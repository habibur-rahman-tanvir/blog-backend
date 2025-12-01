import BaseError from '../errors/BaseError.js';

const signoutController = async (req, res) => {
  req.session.destroy((err) => {
    if (err) throw new BaseError('Logout failed', 500);
    return res.json({ message: 'Signout successfull' });
  });
};

export default signoutController;
