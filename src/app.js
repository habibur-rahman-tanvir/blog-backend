import express from 'express';

const app = express();

app.get('/user', (req, res) => {
  res.send('This is user page');
});

app.get('/about', (req, res) => {
  res.send('This is about page');
});

app.get('/', (req, res) => {
  res.send('This is home page');
});

app.use((req, res) => {
  res.send('404- Not found');
});

export default app;
