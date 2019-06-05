import express from 'express'
import passport from 'passport'
import authRouter from './routes/auth'
import home from './routes/home'
import world from './routes/world'
import author from './routes/author'
import edit from './routes/edit'
import session from './session'
import './database'
import './passport'

const app = express()

app.use(session)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('dist'))

// main public pages
app.get('/', home)
app.get('/:authorSlug/:worldSlug', world)
app.get('/:authorSlug/:worldSlug/edit', edit)
app.get('/:authorSlug', author)

app.use(authRouter)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('listening on port', port)) /* eslint-disable-line no-console */
