import express from 'express'
import passport from 'passport'
import authRoutes from './routes/auth'
import home from './routes/home'
import login from './routes/login'
import user from './routes/user'
import world from './routes/world'
import edit from './routes/edit'
import author from './routes/author'
import './database'
import './passport'
import session from './session'
import { guest, secure } from './middleware/auth'

const app = express()

app.use(session)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('dist'))

app.use(authRoutes)

// main public pages
app.get('/', home)
app.get('/login', guest, login)
app.get('/dashboard', secure, user)
app.get('/:authorSlug/:worldSlug', world)
app.get('/:authorSlug/:worldSlug/edit', edit)
app.get('/:authorSlug', author)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('listening on port', port)) /* eslint-disable-line no-console */
