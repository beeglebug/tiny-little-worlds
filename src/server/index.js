import express from 'express'
import session from 'express-session'
import passport from 'passport'
import { strategy, router } from './auth/twitter'
import { connect } from './database'
import User from './models/User'
import getGame from './getGame'
import postGame from './postGame'

connect()

const port = process.env.PORT || 3000
const app = express()

app.use(session({
  secret: 'lolwut',
  cookie: {},
  resave: false,
  saveUninitialized: true,
}))

passport.serializeUser(function (user, done) {
  done(null, user.username)
})

passport.deserializeUser(async function (username, done) {
  const user = await User.findOne({ username }).exec()
  done(null, user)
})

passport.use(strategy)

app.use(passport.initialize())
app.use(passport.session())

app.use(router)

app.get('/login', function (request, response) {
  return response.send('<a href="/auth/twitter">Sign in with Twitter</a>')
})

app.get('/logout', function (request, response) {
  request.logout()
  response.redirect('/')
})

app.get('/secure', secure, function (request, response) {
  return response.send('only logged in')
})

app.get('/api/game/:slug', getGame)
app.post('/api/game/:slug', postGame)

app.use(express.static('dist'))

app.listen(port, () => console.log('listening on port', port)) /* eslint-disable-line no-console */

function secure (request, response, next) {
  if (request.isAuthenticated()) return next()
  response.redirect('/login')
}
