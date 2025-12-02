import BaseError from '../errors/BaseError.js';

const signoutController = async (req, res) => {
  req.session.destroy((err) => {
    if (err) throw new BaseError('Signout failed', 500);
    return res.json({
      status: 'success',
      message: 'Signout successful',
    });
  });
};

export default signoutController;
