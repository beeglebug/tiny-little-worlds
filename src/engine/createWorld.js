import { BoxGeometry, Color, Mesh, MeshLambertMaterial, Object3D, PlaneGeometry } from 'three'

import { TILE_SIZE, WALL_HEIGHT } from './consts'


export default function createWorld (map) {

  const world = new Object3D()

  const SCALE = 8

  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const ix = (y * map.width) + x
      const tile = map.data[ix]
      if (tile === 0) continue
      const dx = x * SCALE
      const dz = y * SCALE
      let mesh
      if (tile === 2) {
        mesh = createWall()
      } else {
        mesh = createFloor()
      }
      mesh.position.set(dx, 0, dz)
      world.add(mesh)
    }
  }

  return world
}



const floorMaterial = new MeshLambertMaterial({ color: new Color('#6a6e7c') })
const wallMaterial = new MeshLambertMaterial({ color: new Color('#5f606e') })

function createWall () {
  const geometry = new BoxGeometry(TILE_SIZE, WALL_HEIGHT, TILE_SIZE)
  const mesh = new Mesh(geometry, wallMaterial)
  mesh.position.y = WALL_HEIGHT / 2
  return mesh
}

function createFloor () {
  const geometry = new PlaneGeometry(TILE_SIZE, TILE_SIZE)
  geometry.rotateX(-Math.PI / 2)
  return new Mesh(geometry, floorMaterial)
}
