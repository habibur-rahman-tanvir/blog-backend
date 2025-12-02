import BaseError from '../errors/BaseError.js';

const isAuth = async (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  throw new BaseError('User not signuped', 401);
};

export default isAuth;
