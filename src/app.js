/* eslint-disable comma-dangle */
import express from 'express';
import authRouter from './routes/authRouter.js';
import globalErrorHandler from './middleware/errorHandler.js';
import sessionMiddleware from './config/session.js';
import profileRouter from './routes/profileRouter.js';

const app = express();
app.use(express.json());
app.use(sessionMiddleware);

app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);

app.use(globalErrorHandler);

export default app;
