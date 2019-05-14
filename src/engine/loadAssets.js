import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { NearestFilter } from 'three/src/constants'
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial'
import { Mesh } from 'three/src/objects/Mesh'
import { PlaneGeometry } from 'three/src/geometries/PlaneGeometry'
import { BoxGeometry } from 'three/src/geometries/BoxGeometry'
import { TILE_SIZE, WALL_HEIGHT } from './consts'

export default function loadAssets (game) {

  // TODO multiple palettes
  const { tiles, entities } = game.palettes[0]
  const textureLoader = new TextureLoader()
  const meshLoader = {}

  const core = [{ mesh: 'shadow-small', texture: '/assets/shadow-small.png' }]

  const textures = [...core, ...tiles, ...entities]
    .filter(item => item.texture)
    .reduce((textures, item) => {
      const path = getPath(game, item)
      textures[item.texture] = loadTexture(textureLoader, path)
      return textures
    }, {})

  const meshes = [...core, ...tiles, ...entities]
    .filter(item => (item.mesh && item.texture))
    .reduce((meshes, item) => {
      meshes[item.mesh] = loadMesh(meshLoader, item.mesh, textures[item.texture])
      return meshes
    }, {})

  meshes['shadow-small'].material.opacity = 0.5
  meshes['shadow-small'].material.depthWrite = false
  meshes['shadow-small'].material.transparent = true

  return { textures, meshes }
}

function getPath (game, item) {
  if (item.texture.startsWith('/')) return item.texture
  return `/${game.id}/assets/${item.texture}`
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

const shadowSmallGeometry = new PlaneGeometry(TILE_SIZE / 2, TILE_SIZE / 2)
shadowSmallGeometry.rotateX(-Math.PI / 2)

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
  'shadow-small': shadowSmallGeometry,
  'wall.obj': wallGeometry,
  'floor.obj': floorGeometry,
  'door.obj': doorGeometry,
}
