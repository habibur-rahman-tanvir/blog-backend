/* eslint-disable comma-dangle */
import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRouter.js';
import globalErrorHandler from './middleware/errorHandler.js';
import sessionMiddleware from './config/session.js';
import profileRouter from './routes/profileRouter.js';
import isAuth from './middleware/isAuth.js';
import corsMiddleware from './middleware/cors.js';

const app = express();

// app.set('trust proxy', 1);
app.use(cookieParser());
app.use((req, res, next) => {
  console.log('COOKIES:', JSON.stringify(req.cookies, null, 2));
  next();
});

app.use(corsMiddleware);
app.use(express.json());
app.use(sessionMiddleware);

app.use('/api/auth', authRouter);
app.use('/api/profile', isAuth, profileRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(globalErrorHandler);

export default app;
