/* eslint-disable import/extensions */
import app from './src/app.js';
import 'dotenv/config';
import { connectDatabase } from './src/config/db.js';

const PORT = process.env.PORT || 3000;

await connectDatabase();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
