import session from 'express-session'
import connectMongo from 'connect-mongo'
import mongoose from 'mongoose'

const MongoStore = connectMongo(session)

export default session({
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  name: 'session-id',
  saveUninitialized: false,
  resave: false,
  // cookie: { secure: true },
})
