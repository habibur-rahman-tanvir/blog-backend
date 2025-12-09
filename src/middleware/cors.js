import cors from 'cors';
import BaseError from '../errors/BaseError.js';

const whitelist = [undefined, 'http://localhost:5173', 'https://localhost:5173'];

const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (whitelist.length === 0 || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.log('BLOCKED_ORIGIN:', origin);
      callback(new BaseError('Not allowed by CORS'));
    }
  },
  credentials: true,
});

export default corsMiddleware;
