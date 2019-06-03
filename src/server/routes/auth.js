import express from 'express'
import passport from 'passport'
import { secure } from '../middleware/auth'

const router = express.Router()

router.get('/auth/twitter', passport.authenticate('twitter'))

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/',
}))

router.get('/auth/logout', secure, function (request, response) {
  request.logout()
  response.redirect('/')
})

export default router
