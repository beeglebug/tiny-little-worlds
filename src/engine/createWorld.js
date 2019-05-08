import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  NearestFilter,
  Object3D,
  PlaneGeometry,
  TextureLoader
} from 'three'

import { TILE_SIZE, WALL_HEIGHT } from './consts'
import Rect from './physics/geometry/Rect'
import Physics from './Physics'

export default function createWorld (map) {

  const world = new Object3D()

  const colliders = []

  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const tile = get(map, x, y)
      const dx = x * TILE_SIZE
      const dy = y * TILE_SIZE
      if (tile === 0) {
        // if any surrounding tiles are solid, make it collidable
        const surroundingTiles = getSurrounding(map, x, y)
        if (surroundingTiles.some(tile => tile === 1)) {
          console.log({ x, y, surroundingTiles })
          const collider = makeCollider(dx, dy)
          colliders.push(collider)
        }
        continue
      }
      let mesh
      if (tile === 2) {
        mesh = wallMesh.clone()
        const collider = makeCollider(dx, dy)
        colliders.push(collider)
      } else {
        mesh = floorMesh.clone()
      }
      // 2d to 3d
      mesh.position.set(dx, 0, dy)
      world.add(mesh)
    }
  }

  Physics.setColliders(colliders)

  return world
}

function get (map, x, y) {
  const ix = (y * map.width) + x
  return map.data[ix]
}

const offsets = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

function getSurrounding (map, x, y) {
  return offsets
    .map(([ox, oy]) => [ox + x, oy + y])
    .filter(([ox, oy]) => (ox >= 0 && ox < map.width && oy >= 0 && oy < map.height))
    .map(([ox, oy]) => get(map, ox, oy))
}

function makeCollider (x, y) {
  return new Rect(
    x - TILE_SIZE / 2,
    y - TILE_SIZE / 2,
    TILE_SIZE,
    TILE_SIZE
  )
}

const loader = new TextureLoader()

const wallTexture = loader.load('./assets/wall.png')
wallTexture.magFilter = NearestFilter
wallTexture.minFilter = NearestFilter

const floorTexture = loader.load('./assets/floor.png')
floorTexture.magFilter = NearestFilter
floorTexture.minFilter = NearestFilter

const wallMaterial = new MeshBasicMaterial({ map: wallTexture })
const wallGeometry = new BoxGeometry(TILE_SIZE, WALL_HEIGHT, TILE_SIZE)
wallGeometry.translate(0, WALL_HEIGHT / 2, 0)
const wallMesh = new Mesh(wallGeometry, wallMaterial)

const floorMaterial = new MeshBasicMaterial({ map: floorTexture })

const floorGeometry = new PlaneGeometry(TILE_SIZE, TILE_SIZE)
floorGeometry.rotateX(-Math.PI / 2)

const ceilingGeometry = new PlaneGeometry(TILE_SIZE, TILE_SIZE)
ceilingGeometry.rotateX(Math.PI / 2)
ceilingGeometry.translate(0, WALL_HEIGHT, 0)

floorGeometry.merge(ceilingGeometry)

const floorMesh = new Mesh(floorGeometry, floorMaterial)
