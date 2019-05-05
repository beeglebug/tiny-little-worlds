import Vector2 from './Vector2'

const _v = new Vector2()

export default class Rect {

  constructor (x = 0, y = 0, width = 1, height = 1) {
    this.set(x, y, width, height)
  }

  get center () {
    return _v.set(
      this.x + this.width / 2,
      this.y + this.height / 2,
    )
  }

  set (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    return this
  }
}
