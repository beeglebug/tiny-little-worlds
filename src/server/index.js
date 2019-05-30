import express from 'express'

const port = process.env.PORT || 3000
const app = express()

app.get('/', function (req, res) {
  res.send(JSON.stringify({ Hello: 'World' }))
})

app.listen(port, function () {
  console.log('listening on port', port)
})
