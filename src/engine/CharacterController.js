import { Object3D } from 'three/src/core/Object3D'
import { Vector3 } from 'three/src/math/Vector3'
import { Vector2 } from 'three/src/math/Vector2'
import { Raycaster } from 'three/src/core/Raycaster'
import KeyCode from './input/KeyCode'
import Input from './input/Input'
import clamp from './maths/clamp'
import Circle from './physics/geometry/Circle'
import Physics from './Physics'
import { INTERACTION_RANGE } from './consts'

const halfPi = Math.PI / 2
const screenCenter = new Vector2()

export default class CharacterController extends Object3D {

  enabled = false
  eyeHeight = 1.5
  velocity = new Vector3()
  direction = new Vector3()

  collider = null
  mouseSensitivity = 0.6
  speed = 100
  runSpeed = 200

  // an entity in front of us which we could interact with
  interactionTarget = null

  constructor (camera) {
    super()

    this.camera = camera

    this.pitch = new Object3D()
    this.pitch.position.y = this.eyeHeight

    this.add(this.pitch)
    this.pitch.add(camera)

    this.collider = new Circle(0, 0, 0.6)

    this.raycaster = new Raycaster()
    this.raycaster.far = INTERACTION_RANGE

    // TODO from config
    this.controls = {
      forward: Input.createButton('forward', KeyCode.W, KeyCode.UpArrow),
      back: Input.createButton('back', KeyCode.S, KeyCode.DownArrow),
      left: Input.createButton('left', KeyCode.A, KeyCode.LeftArrow),
      right: Input.createButton('right', KeyCode.D, KeyCode.RightArrow),
      interact: Input.createButton('interact', KeyCode.E),
      // run: Input.createButton('run', KeyCode.LeftShift),
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

    // get nearby
    const colliders = Physics.getColliders(this)

    Physics.collide(this.collider, colliders, this.onCollision)

    // update the player controller based on the collider
    this.position.set(this.collider.x, 0, this.collider.y)
  }

  onCollision = (response) => {
    const { mtd } = response
    this.collider.x += mtd.x
    this.collider.y += mtd.y
  }

  update (delta, nearbyEntities) {
    if (!this.enabled) return

    this.handleMouseInput(delta)
    this.handleKeyboardInput(delta)

    this.translateX(this.velocity.x * delta)
    this.translateZ(this.velocity.z * delta)

    this.handlePhysics()

    this.handleInteraction(nearbyEntities)
  }

  handleInteraction (nearbyEntities) {

    this.raycaster.setFromCamera(screenCenter, this.camera)

    const interactiveEntities = nearbyEntities.filter(entity => entity.interactive)

    const intersections = this.raycaster.intersectObjects(interactiveEntities)

    if (intersections.length) {

      const closest = intersections[0]

      // the target is the parent Entity
      this.interactionTarget = closest.object.parent
    } else {
      this.interactionTarget = null
    }

    if (this.interactionTarget && Input.getButtonDown(this.controls.interact)) {
      console.log('interacting with', this.interactionTarget)
    }
  }
}
