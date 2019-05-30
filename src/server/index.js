import express from 'express'
import session from 'express-session'
import passport from 'passport'
import TwitterStrategy from 'passport-twitter'

import getGame from './getGame'
import postGame from './postGame'

const port = process.env.PORT || 3000
const app = express()

app.use(session({
  secret: 'lolwut',
  cookie: {},
  resave: false,
  saveUninitialized: true,
}))

const strategy = new TwitterStrategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://tiny-little-world.herokuapp.com/auth/twitter/callback',
  },
  function (token, tokenSecret, profile, done) {
    console.log(token, tokenSecret, profile)
    const user = {}
    done(null, user)
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    // done(null, user)
  }
)

passport.use(strategy)

app.use(passport.initialize())
app.use(passport.session())

app.get('/auth/twitter', passport.authenticate('twitter'))

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login',
}))

app.get('/login', function (request, response) {
  return response.send('<a href="/auth/twitter">Sign in with Twitter</a>')
})

app.get('/api/game/:slug', getGame)
app.post('/api/game/:slug', postGame)

app.use(express.static('dist'))

app.listen(port, () => console.log('listening on port', port)) /* eslint-disable-line no-console */
