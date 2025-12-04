import cors from 'cors';
import BaseError from '../errors/BaseError.js';

const whitelist = [undefined, 'http://localhost:8080', 'http://localhost:5173'];

const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (whitelist.length === 0 || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new BaseError('Not allowed by CORS'));
    }
  },
  credentials: true,
});

export default corsMiddleware;
