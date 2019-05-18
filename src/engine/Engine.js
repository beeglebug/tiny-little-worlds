import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera'
import createScene from './createScene'
import CharacterController from './CharacterController'
import Input from './input/Input'
import { HEIGHT, TILE_SIZE, WIDTH } from './consts'
import loop from './loop'
import createContent from './createContent'
import loadAssets from './loadAssets'
import { Object3D } from 'three/src/core/Object3D'
import Physics from './Physics'
import Rect from './physics/geometry/Rect'

export default class Engine {

  constructor (canvas) {

    this.canvas = canvas
    this.scene = createScene()
    this.renderer = new WebGLRenderer({ canvas })
    this.camera = new PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
    this.controller = new CharacterController(this.camera)
    this.scene.add(this.controller)

    this.setupPointerLock(canvas)
  }

  load (game) {

    this.clear()

    const assets = loadAssets(game)

    this.world = new Object3D()

    const [ tiles, entities ] = createContent(game, assets, this.controller)

    if (tiles.length) this.world.add(...tiles)
    if (entities.length) this.world.add(...entities)

    const entityColliders = entities
      .filter(obj => obj.collider)
      .map(obj => obj.collider)

    const tileColliders = tiles
      .filter(obj => obj.collider)
      .map(obj => obj.collider)

    // TODO handle colliders separately to allow for easy broadphase on tiles
    Physics.setColliders([...entityColliders, ...tileColliders])

    this.tiles = tiles
    this.entities = entities

    this.scene.add(this.world)

    this.controller.resetRotation(Math.PI, 0)
    this.controller.handlePhysics() // force update the 2d collider
  }

  start () {
    Input.bind(this.canvas)

    this.canvas.focus()
    this.canvas.requestPointerLock()

    this.cancelLoop = loop(this.tick)
  }

  clear () {
    Physics.clearColliders()
    if (this.world) {
      // loop backwards to a void mid loop splice reindexing
      for (let i = this.world.children.length - 1; i >= 0; i--) {
        this.world.remove(this.world.children[i])
      }
    }
  }

  stop () {
    Input.unbind(this.canvas)
    this.canvas.blur()
    this.cancelLoop()
    this.onStop()
  }

  tick = (deltaTime) => {

    // TODO actual broadphase
    const nearbyEntities = this.entities

    this.controller.update(deltaTime, nearbyEntities)

    this.render()

    Input.clear()
  }

  render () {
    this.renderer.render(this.scene, this.camera)
  }

  setupPointerLock (domElement) {

    const handlePointerLockChange = () => {
      if (document.pointerLockElement === domElement) {
        this.controller.enabled = true
      } else {
        this.controller.enabled = false
        this.stop()
      }
    }

    const handlePointerLockError = (error) => {
      return console.warn('Pointer Lock Error', error)
    }

    document.addEventListener('pointerlockchange', handlePointerLockChange)
    document.addEventListener('pointerlockerror', handlePointerLockError)
  }
}
