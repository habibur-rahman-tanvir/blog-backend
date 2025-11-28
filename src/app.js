/* eslint-disable import/extensions */
import express from 'express';
import User from './model/user.model.js';

const app = express();
app.use(express.json());

app.post('/user', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

app.get('/user', async (req, res) => {
  res.json(await User.find().lean());
});

app.get('/', (req, res) => {
  res.send('This is home page');
});

app.use((req, res) => {
  res.send('404- Not found');
});

export default app;
