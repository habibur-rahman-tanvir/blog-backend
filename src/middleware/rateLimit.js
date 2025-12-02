import rateLimit from 'express-rate-limit';

const setRateLimit = (limit = 100, minute = 15, message = 'Rate limit reached') => {
  console.log();
  return rateLimit({
    windowMs: 1000 * 60 * minute,
    max: limit,
    message: {
      status: 'fail',
      message,
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};

export default setRateLimit;
