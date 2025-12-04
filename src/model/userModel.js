/* eslint-disable func-names */
/* eslint-disable comma-dangle */
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

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
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isValidPassword = async function (pass) {
  return bcrypt.compare(pass, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
