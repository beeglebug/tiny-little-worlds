import { BoxGeometry, Mesh, MeshBasicMaterial, NearestFilter, PlaneGeometry, TextureLoader } from 'three'
import { TILE_SIZE, WALL_HEIGHT } from './consts'

export default function loadAssets (game) {
  // TODO multiple palettes
  const { tiles } = game.palettes[0]
  const loader = new TextureLoader()
  return Promise
    .all(tiles.map(tile => {
      const path = `/assets/games/${game.id}/assets/${tile.texture}`
      const texture = loader.load(path)
      texture.magFilter = NearestFilter
      texture.minFilter = NearestFilter
      return { ...tile, texture }
    }))
    .then(tiles => {
      return tiles.map(tile => {
        const geometry = GEOMETRY[tile.mesh]
        const material = new MeshBasicMaterial({ map: tile.texture })
        tile.mesh = new Mesh(geometry, material)
        return tile
      }).reduce((tiles, tile) => {
        tiles[tile.id] = tile
        return tiles
      }, {})
    })
}

const wallGeometry = new BoxGeometry(TILE_SIZE, WALL_HEIGHT, TILE_SIZE)
wallGeometry.translate(0, WALL_HEIGHT / 2, 0)

const floorGeometry = new PlaneGeometry(TILE_SIZE, TILE_SIZE)
floorGeometry.rotateX(-Math.PI / 2)

const ceilingGeometry = new PlaneGeometry(TILE_SIZE, TILE_SIZE)
ceilingGeometry.rotateX(Math.PI / 2)
ceilingGeometry.translate(0, WALL_HEIGHT, 0)

floorGeometry.merge(ceilingGeometry)

const GEOMETRY = {
  WALL: wallGeometry,
  FLOOR: floorGeometry,
}
