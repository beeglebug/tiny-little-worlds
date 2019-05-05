import { Object3D, Vector3 } from 'three'
import KeyCode from './input/KeyCode'
import Input from './input/Input'
import clamp from './maths/clamp'
import Circle from './physics/geometry/Circle'
import separate from './physics/separate'
import Physics from './Physics'

const halfPi = Math.PI / 2

export default class CharacterController extends Object3D {

  enabled = false
  eyeHeight = 1.8
  velocity = new Vector3()
  direction = new Vector3()

  collider = null
  mouseSensitivity = 0.6
  speed = 100
  runSpeed = 200

  constructor (camera) {
    super()

    this.pitch = new Object3D()
    this.pitch.position.y = this.eyeHeight

    this.add(this.pitch)
    this.pitch.add(camera)

    this.collider = new Circle(0, 0, 1)

    this.controls = {
      forward: Input.createButton('forward', KeyCode.W, KeyCode.UpArrow),
      back: Input.createButton('back', KeyCode.S, KeyCode.DownArrow),
      left: Input.createButton('left', KeyCode.A, KeyCode.LeftArrow),
      right: Input.createButton('right', KeyCode.D, KeyCode.RightArrow),
      run: Input.createButton('run', KeyCode.LeftShift),
    }
  }

  resetRotation (y, x) {
    this.rotation.y = y
    this.pitch.rotation.x = x
  }

  handleMouseInput (delta) {
    // apply mouse movement
    this.rotation.y -= Input.getAxis(Input.MouseX) * delta * this.mouseSensitivity
    this.pitch.rotation.x -= Input.getAxis(Input.MouseY) * delta * this.mouseSensitivity

    // clamp between straight down and straight up
    this.pitch.rotation.x = clamp(this.pitch.rotation.x, -halfPi, halfPi)
  }

  handleKeyboardInput (delta) {

    const moveForward = Input.getButton(this.controls.forward)
    const moveBack = Input.getButton(this.controls.back)
    const moveLeft = Input.getButton(this.controls.left)
    const moveRight = Input.getButton(this.controls.right)
    const running = Input.getButton(this.controls.run)

    // apply damping
    this.velocity.x -= this.velocity.x * 10.0 * delta
    this.velocity.z -= this.velocity.z * 10.0 * delta

    this.direction.z = moveForward - moveBack
    this.direction.x = moveLeft - moveRight
    this.direction.normalize()

    const z = this.direction.z * (running ? this.runSpeed : this.speed)
    const x = this.direction.x * (running ? this.runSpeed : this.speed)

    if (moveForward || moveBack) this.velocity.z -= z * delta
    if (moveLeft || moveRight) this.velocity.x -= x * delta
  }

  handlePhysics () {
    // copy position to the collider
    this.collider.x = this.position.x
    this.collider.y = this.position.z

    // stop the player going into the cubes
    const colliders = Physics.getColliders(this)

    separate(this.collider, colliders)

    // update the player controller based on the collider
    this.position.set(this.collider.x, 0, this.collider.y)
  }

  update (delta) {
    if (!this.enabled) return

    this.handleMouseInput(delta)
    this.handleKeyboardInput(delta)

    this.translateX(this.velocity.x * delta)
    this.translateZ(this.velocity.z * delta)

    this.handlePhysics()
  }
}
