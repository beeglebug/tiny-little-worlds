import Vector2 from './Vector2'

export default class Line {

  constructor (sx = 0, sy = 0, ex = 0, ey = 0) {
    this.start = new Vector2(sx, sy)
    this.end = new Vector2(ex, ey)
  }
}
