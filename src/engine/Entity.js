import { Object3D } from 'three/src/core/Object3D'
import { TILE_SIZE } from './consts'

export default class Entity extends Object3D {

  constructor (props) {
    super()

    this.position.set(
      props.x * TILE_SIZE,
      0,
      props.y * TILE_SIZE
    )
  }
}
