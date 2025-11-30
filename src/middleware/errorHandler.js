/* eslint-disable no-unused-vars */
import ValidationError from '../errors/validationError.js';

/* eslint-disable no-param-reassign */
const globalErrorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    err = new ValidationError(err);
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.isOperational ? err.message : 'Something went wrong!',
  });
};

export default globalErrorHandler;
