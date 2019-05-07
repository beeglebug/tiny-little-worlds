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
      const ix = (y * map.width) + x
      const tile = map.data[ix]
      if (tile === 0) continue
      const dx = x * TILE_SIZE
      const dy = y * TILE_SIZE
      let mesh
      if (tile === 2) {
        mesh = wallMesh.clone()
        const collider = new Rect(
          dx - TILE_SIZE / 2,
          dy - TILE_SIZE / 2,
          TILE_SIZE,
          TILE_SIZE
        )
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
