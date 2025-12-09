/* eslint-disable import/extensions */
import https from 'https';
import fs from 'fs';
import app from './src/app.js';
import 'dotenv/config';
import { connectDatabase } from './src/config/db.js';

const key = fs.readFileSync('./src/certificate/key.pem');
const cert = fs.readFileSync('./src/certificate/cert.pem');

const PORT = process.env.PORT || 3000;

await connectDatabase();

if (process.env.NODE_ENV === 'production') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
} else {
  const server = https.createServer({ key, cert }, app);
  server.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
  });
}
