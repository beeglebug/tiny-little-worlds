import express from 'express'
import passport from 'passport'
import authRouter from './routes/auth'
import gameRouter from './routes/game'
import userRouter from './routes/user'
import session from './session'
import './database'
import './passport'

const app = express()

app.use(session)
app.use(passport.initialize())
app.use(passport.session())

app.use(authRouter)
app.use(gameRouter)
app.use(userRouter)

app.use(express.static('dist'))

app.get('/', function (request, response) {
  response.sendFile('/dist/index.html')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log('listening on port', port)) /* eslint-disable-line no-console */
