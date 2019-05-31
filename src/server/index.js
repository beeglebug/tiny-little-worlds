import express from 'express'
import session from 'express-session'
import passport from 'passport'
import authRouter from './routes/auth'
import gameRouter from './routes/game'
import { connect } from './database'
import './passport'

connect()

const port = process.env.PORT || 3000
const app = express()

app.use(session({
  secret: 'lolwut',
  cookie: {},
  resave: false,
  saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(authRouter)
app.use(gameRouter)

app.use(express.static('dist'))

app.use('/', function (request, response) {
  response.sendFile('/dist/index.html')
})

app.listen(port, () => console.log('listening on port', port)) /* eslint-disable-line no-console */
