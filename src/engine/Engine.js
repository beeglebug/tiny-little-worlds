import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera'
import { Object3D } from 'three/src/core/Object3D'
import createScene from './createScene'
import CharacterController from './CharacterController'
import Input from './input/Input'
import { HEIGHT, WIDTH } from './consts'
import loop from './loop'
import createContent from './createContent'
import loadAssets from './loadAssets'
import Physics from './Physics'

export default class Engine {

  constructor (canvas3d, canvas2d) {

    this.canvas3d = canvas3d
    this.canvas2d = canvas2d

    this.scene = createScene()
    this.renderer = new WebGLRenderer({ canvas: canvas3d })
    this.camera = new PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
    this.controller = new CharacterController(this.camera)
    this.scene.add(this.controller)

    this.setupPointerLock(canvas3d)

    this.ctx = canvas2d.getContext('2d')
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
    Input.bind(this.canvas3d)

    this.canvas3d.focus()
    this.canvas3d.requestPointerLock()

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
    Input.unbind(this.canvas3d)
    this.canvas3d.blur()
    this.cancelLoop()
    this.onStop()
  }

  tick = (deltaTime) => {

    // TODO actual broadphase
    const nearbyEntities = this.entities

    this.controller.update(deltaTime, nearbyEntities)

    this.entities.forEach(entity => entity.update(this))

    this.render()

    Input.clear()
  }

  render () {
    this.renderer.render(this.scene, this.camera)

    // 2d rendering
    this.ctx.fillStyle = this.controller.interactionTarget ? '#FF0000' : '#FFFFFF'
    const size = 4
    this.ctx.fillRect(
      (WIDTH / 2) - (size / 2),
      (HEIGHT / 2) - (size / 2),
      size,
      size
    )
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
