import { connect, Game } from './database'

export default async function (request, response) {

  connect()

  const { slug } = request.params

  const game = await Game.findOne({ slug }).exec()

  if (game === null) {
    return response.sendStatus(404)
  }

  return response.json(game)
}
