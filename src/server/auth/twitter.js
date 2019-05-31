import express from 'express'
import passport from 'passport'
import TwitterStrategy from 'passport-twitter'
import User from '../models/User'

const config = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: 'http://tiny-little-world.herokuapp.com/auth/twitter/callback',
}

async function verify (token, tokenSecret, profile, done) {
  // TODO make sure this works for things other than twitter
  const { provider, username } = profile

  // TODO handle same username as other user
  let user = await User.findOne({ username }).exec()
  if (!user) {
    user = new User({ provider, username }).save()
  }

  done(null, user)
}

export const strategy = new TwitterStrategy(config, verify)

export const router = express.Router()

router.get('/auth/twitter', passport.authenticate('twitter'))

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login',
}))
