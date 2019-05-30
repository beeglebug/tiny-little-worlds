import { connect } from './database'

export default async function (request, response) {
  connect()
  response.sendStatus(200)
}
