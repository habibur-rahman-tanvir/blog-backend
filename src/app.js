/* eslint-disable import/extensions */
import express from 'express';
import authRouter from './routes/authRouter.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(`Error: ${err}`);
  res.status(500).json({
    error: 'An error occurred',
  });
});

export default app;
