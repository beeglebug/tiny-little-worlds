import express from 'express'
import getGame from './getGame'
import postGame from './postGame'

const port = process.env.PORT || 3000
const app = express()

app.use(express.static('dist'))

app.get('/api/game/:slug', getGame)
app.post('/api/game/:slug', postGame)

app.listen(port, () => console.log('listening on port', port)) /* eslint-disable-line no-console */
