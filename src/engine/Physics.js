
class Physics {

  colliders = []

  setColliders (colliders) {
    this.colliders = colliders
  }

  addColliders (colliders) {
    this.colliders.push(...colliders)
  }

  clearColliders () {
    this.colliders = []
  }

  getColliders (player) {
    // TODO filter by player position
    return this.colliders
  }
}

export default new Physics()
