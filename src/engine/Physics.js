
class Physics {

  _lastColliders = []

  getColliders (player) {

    const colliders = []

    this._lastColliders = colliders

    return colliders
  }
}

export default new Physics()
