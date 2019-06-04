import express from 'express'
import passport from 'passport'
import authRouter from './routes/auth'
import home from './routes/home'
import game from './routes/game'
import user from './routes/user'
import session from './session'
import './database'
import './passport'

const app = express()

app.use(session)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('dist'))

app.get('/', home)
app.get('/:userSlug/:gameSlug', game)
app.get('/:slug', user)

app.use(authRouter)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('listening on port', port)) /* eslint-disable-line no-console */
