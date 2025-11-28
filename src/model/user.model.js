/* eslint-disable comma-dangle */
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
