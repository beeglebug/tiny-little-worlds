import { BoxGeometry, Mesh, MeshBasicMaterial, NearestFilter, PlaneGeometry, TextureLoader } from 'three'
import { TILE_SIZE, WALL_HEIGHT } from './consts'

export default function loadAssets (game) {

  // TODO multiple palettes
  const { tiles, entities } = game.palettes[0]
  const textureLoader = new TextureLoader()
  const meshLoader = {}

  const textures = [...tiles, ...entities]
    .filter(item => item.texture)
    .reduce((textures, item) => {
      textures[item.texture] = loadTexture(textureLoader, `/assets/games/${game.id}/assets/${item.texture}`)
      return textures
    }, {})

  const meshes = [...tiles, ...entities]
    .filter(item => (item.mesh && item.texture))
    .reduce((meshes, item) => {
      meshes[item.mesh] = loadMesh(meshLoader, item.mesh, textures[item.texture])
      return meshes
    }, {})

  return { textures, meshes }
}

function loadTexture (loader, path) {
  const texture = loader.load(path)
  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  return texture
}

// TODO load geometry from files
function loadMesh (loader, path, map) {
  const geometry = TEMP_GEOMETRY[path]
  const material = new MeshBasicMaterial({ map })
  return new Mesh(geometry, material)
}

const wallGeometry = new BoxGeometry(TILE_SIZE, WALL_HEIGHT, TILE_SIZE)
wallGeometry.translate(0, WALL_HEIGHT / 2, 0)

// aligned for 2d horizontal
const doorGeometry = new BoxGeometry(TILE_SIZE, WALL_HEIGHT, TILE_SIZE / 2)
doorGeometry.translate(0, WALL_HEIGHT / 2, 0)

const floorGeometry = new PlaneGeometry(TILE_SIZE, TILE_SIZE)
floorGeometry.rotateX(-Math.PI / 2)

const ceilingGeometry = new PlaneGeometry(TILE_SIZE, TILE_SIZE)
ceilingGeometry.rotateX(Math.PI / 2)
ceilingGeometry.translate(0, WALL_HEIGHT, 0)

floorGeometry.merge(ceilingGeometry)

const TEMP_GEOMETRY = {
  'wall.obj': wallGeometry,
  'floor.obj': floorGeometry,
  'door.obj': doorGeometry,
}
