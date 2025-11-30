/* eslint-disable comma-dangle */
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, 'fullname required'],
      minLength: [3, 'fullname too short'],
      maxLength: [100, 'fullname too long'],
    },
    email: {
      type: String,
      required: [true, 'email required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password required'],
      minLength: [8, 'password too short'],
      maxLength: [72, 'password too long'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
