import Vector2 from '../geometry/Vector2'

export default class CollisionResponse {

  position = new Vector2()
  normal = new Vector2()
  depth = 0
  _mtd = new Vector2()

  reset () {
    this.position.zero()
    this.normal.zero()
    this.depth = 0
    this._mtd.zero()
  }

  get mtd () {
    return this._mtd.set(this.normal.x, this.normal.y).multiply(this.depth)
  }
}
