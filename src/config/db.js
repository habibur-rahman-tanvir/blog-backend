/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('Database connected');
  } catch (err) {
    console.log("[ERROR] Database can't connect: ", err.message);
  }
};

export { connectDatabase };
