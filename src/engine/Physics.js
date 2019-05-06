
class Physics {

  colliders = []

  setColliders (colliders) {
    this.colliders = colliders
  }

  getColliders (player) {
    // TODO filter by player position
    return this.colliders
  }
}

export default new Physics()
