import { BoxGeometry, Color, Mesh, MeshLambertMaterial, Object3D, PlaneGeometry } from 'three'

import { TILE_SIZE, WALL_HEIGHT } from './consts'


export default function createWorld (map) {

  const world = new Object3D()

  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const ix = (y * map.width) + x
      const tile = map.data[ix]
      if (tile === 0) continue
      const dx = x * TILE_SIZE
      const dz = y * TILE_SIZE
      let mesh
      if (tile === 2) {
        mesh = wallMesh.clone()
      } else {
        mesh = floorMesh.clone()
      }
      mesh.position.set(dx, 0, dz)
      world.add(mesh)
    }
  }

  return world
}


const wallMaterial = new MeshLambertMaterial({ color: new Color('#5f606e') })
const wallGeometry = new BoxGeometry(TILE_SIZE, WALL_HEIGHT, TILE_SIZE)
wallGeometry.translate(0, WALL_HEIGHT / 2, 0)
const wallMesh = new Mesh(wallGeometry, wallMaterial)

const floorMaterial = new MeshLambertMaterial({ color: new Color('#6a6e7c') })
const floorGeometry = new PlaneGeometry(TILE_SIZE, TILE_SIZE)
floorGeometry.rotateX(-Math.PI / 2)
const floorMesh = new Mesh(floorGeometry, floorMaterial)
