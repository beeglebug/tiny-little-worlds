class Time {
  constructor () {
    this._prev = null
    this.deltaTime = 0
  }

  update (time) {
    this.deltaTime = (this._prev === null ? 0 : time - this._prev) / 1000
    this._prev = time
  }
}

export default new Time()
