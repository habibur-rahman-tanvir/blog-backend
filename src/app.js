import express from 'express';
import authRouter from './routes/authRouter.js';
import globalErrorHandler from './middleware/errorHandler.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);

app.use(globalErrorHandler);

export default app;
