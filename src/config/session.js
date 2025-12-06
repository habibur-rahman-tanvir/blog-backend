import MongoStore from 'connect-mongo';
import session from 'express-session';
import 'dotenv/config';

const mongoStore = MongoStore.create({
  mongoUrl: process.env.DATABASE_URI,
  dbName: 'auth-database',
  autoRemove: 'native',
});

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'zQPAL8kUWE',
  store: mongoStore,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 24 hour session expire
    httpOnly: false,
    secure: true,
    sameSite: 'none',
  },
});

export default sessionMiddleware;
