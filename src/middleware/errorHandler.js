/* eslint-disable no-unused-vars */
import DuplicatError from '../errors/duplicatError.js';
import ValidationError from '../errors/validationError.js';

/* eslint-disable no-param-reassign */
const globalErrorHandler = (err, req, res, next) => {
  // console.error(err);
  if (err.name === 'ValidationError') {
    err = new ValidationError(err);
  }

  if (err.code === 11000) {
    err = new DuplicatError(err);
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      errors: err.errors,
      stack: err.stack,
      error: err,
    });
  }

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.isOperational ? err.message : 'Something went wrong!',
    errors: err.errors,
  });
};

export default globalErrorHandler;
