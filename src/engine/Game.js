import { PerspectiveCamera, WebGLRenderer } from 'three'
import createScene from './createScene'
import CharacterController from './CharacterController'
import Input from './input/Input'
import { HEIGHT, WIDTH } from './consts'
import loop from './loop'
import createWorld from './createWorld'
import findPlayerPosition from './findPlayerPosition'

export default class Game {

  constructor (canvas) {

    this.canvas = canvas
    this.scene = createScene()
    this.renderer = new WebGLRenderer({ canvas })
    this.camera = new PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
    this.controller = new CharacterController(this.camera)
    this.scene.add(this.controller)

    this.setupPointerLock(canvas)
  }

  start (map) {
    Input.bind(this.canvas)

    this.clear()

    this.world = createWorld(map)

    const [x, y, z] = findPlayerPosition(map)

    this.controller.position.set(x, y, z)
    this.controller.resetRotation(Math.PI, 0)
    this.controller.handlePhysics() // force update the 2d collider

    this.scene.add(this.world)

    this.canvas.focus()
    this.canvas.requestPointerLock()

    this.cancelLoop = loop(this.tick)
  }

  clear () {
    if (!this.world) return
    // loop backwards to a void mid loop splice reindexing
    for (let i = this.world.children.length - 1; i >= 0; i--) {
      this.world.remove(this.world.children[i])
    }
  }

  stop () {
    Input.unbind(this.canvas)
    this.canvas.blur()
    this.cancelLoop()
    this.onStop()
  }

  tick = (deltaTime) => {

    this.controller.update(deltaTime)

    this.renderer.render(this.scene, this.camera)

    Input.clear()
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

    const handlePointerLockError = () => {
      return console.warn('Pointer Lock Error')
    }

    document.addEventListener('pointerlockchange', handlePointerLockChange)
    document.addEventListener('pointerlockerror', handlePointerLockError)
  }
}
