import session from 'express-session'

export default session({
  secret: 'lolwut',
  cookie: {},
  resave: false,
  saveUninitialized: true,
})
