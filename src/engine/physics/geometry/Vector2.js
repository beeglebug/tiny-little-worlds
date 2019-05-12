export default class Vector2 {

  static fromArray = ([x = 0, y = 0] = []) => {
    return new Vector2(x, y)
  }

  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  set (x = 0, y = 0) {
    this.x = x
    this.y = y
    return this
  }

  clone () {
    return new Vector2(this.x, this.y)
  }

  copy (v) {
    this.x = v.x
    this.y = v.y
    return this
  }

  multiply (scalar = 1) {
    this.x *= scalar
    this.y *= scalar
    return this
  }

  divide (scalar = 1) {
    this.x /= scalar
    this.y /= scalar
    return this
  }

  add (vector) {
    this.x += vector.x
    this.y += vector.y
    return this
  }

  subtract (vector) {
    this.x -= vector.x
    this.y -= vector.y
    return this
  }

  abs () {
    this.x = Math.abs(this.x)
    this.y = Math.abs(this.y)
    return this
  }

  floor () {
    this.x = Math.floor(this.x)
    this.y = Math.floor(this.y)
    return this
  }

  zero () {
    this.x = 0
    this.y = 0
    return this
  }

  isZero () {
    return this.x === 0 && this.y === 0
  }

  magnitude () {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }

  /**
   * alters the length of the vector without changing the direction
   * for example: [0,5].setMagnitude(2) = [0,2]
   * @return {Vector2} the modified original vector
   */
  setMagnitude (scalar) {
    return this.normalize().multiply(scalar)
  }

  normalize () {
    // shortcuts to avoid magnitude sqrt
    if (this.isZero()) return this

    if (this.x === 0) {
      this.y = this.y > 0 ? 1 : -1
      return this
    }

    if (this.y === 0) {
      this.x = this.x > 0 ? 1 : -1
      return this
    }

    const magnitude = this.magnitude()

    this.x /= magnitude
    this.y /= magnitude

    return this
  }

  rotate (a) {
    const cos = Math.cos(a)
    const sin = Math.sin(a)
    const x = (cos * this.x) - (sin * this.y)
    const y = (sin * this.x) + (cos * this.y)
    this.x = x
    this.y = y
    return this
  }

  toArray () {
    return [this.x, this.y]
  }
}

Vector2.right = new Vector2(1, 0)
Vector2.left = new Vector2(-1, 0)
Vector2.up = new Vector2(0, -1)
Vector2.down = new Vector2(0, 1)
