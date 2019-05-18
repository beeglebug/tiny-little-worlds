import createTiles from './create/createTiles'
import createEntities from './create/createEntities'

export default function createContent (game, assets, controller) {

  // TODO more than first level
  const map = game.levels[0]
  const palette = game.palettes[map.palette]

  const tiles = createTiles(map, palette, assets)

  const entities = createEntities(map, palette, assets, controller)

  return [ tiles, entities ]
}
