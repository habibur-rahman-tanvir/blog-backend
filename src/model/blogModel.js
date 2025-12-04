/* eslint-disable comma-dangle */
import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema(
  {
    tittle: {
      type: String,
      required: [true, 'tittle must be required'],
      maxLength: [32, 'tittle is so long'],
    },
    subTittle: String,
    description: String,
    mode: {
      type: String,
      enum: {
        values: ['public', 'private'],
        message: 'Mode must be public or private',
      },
      default: 'public',
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
