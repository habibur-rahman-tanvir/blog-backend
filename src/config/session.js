import MongoStore from 'connect-mongo';
import session from 'express-session';
import 'dotenv/config';

const mongoStore = MongoStore.create({
  mongoUrl: process.env.DATABASE_URI,
});

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  name: 'blog.sid',
  store: mongoStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 30,
    httpOnly: true,
    secure: false,
    priority: 'high',
  },
});

export default sessionMiddleware;
