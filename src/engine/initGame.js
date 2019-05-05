import { PerspectiveCamera, WebGLRenderer } from 'three'
import setupPointerLock from './setupPointerLock'
import createScene from './createScene'
import CharacterController from './CharacterController'
import Input from './input/Input'

import { HEIGHT, WIDTH } from './consts'

import loop from './loop'
import createWorld from './createWorld'

export function initGame (canvas, map) {

  Input.bind(canvas)

  const scene = createScene()
  const renderer = new WebGLRenderer({ canvas })
  const camera = new PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
  const controller = new CharacterController(camera)

  setupPointerLock(controller, canvas)

  const world = createWorld(map)

  controller.position.set(0,0,0)
  controller.resetRotation(Math.PI, 0)
  controller.handlePhysics() // force update the 2d collider

  scene.add(world)
  scene.add(controller)

  canvas.focus()

  loop(tick)

  function tick (deltaTime) {

    controller.update(deltaTime)

    renderer.render(scene, camera)

    Input.clear()
  }

}
