import Vector2 from '../physics/geometry/Vector2'
import KeyCode from './KeyCode'

const buttons = {}
const downKeys = {}
const downKeysThisFrame = {}
const upKeysThisFrame = {}

const mousePosition = new Vector2()
const mouseMove = new Vector2()

const MouseX = 'MouseX'
const MouseY = 'MouseY'

const LOCATION_LEFT = 1
const LOCATION_RIGHT = 2

const determineCode = event => {
  switch (event.keyCode) {
    case KeyCode.Shift:
      if (event.location === LOCATION_LEFT) return KeyCode.LeftShift
      else if (event.location === LOCATION_RIGHT) return KeyCode.RightShift
      break
    case KeyCode.Control:
      if (event.location === LOCATION_LEFT) return KeyCode.LeftControl
      else if (event.location === LOCATION_RIGHT) return KeyCode.RightControl
      break
  }
  return event.keyCode
}

const handleKeyDown = event => {
  const code = determineCode(event)
  downKeys[code] = true
  downKeysThisFrame[code] = true
}

const handleKeyUp = event => {
  const code = determineCode(event)
  delete downKeys[code]
  upKeysThisFrame[code] = true
}

const getKey = key => {
  return downKeys[key] === true
}

const getKeyDown = key => {
  return downKeysThisFrame[key] === true
}

const getKeyUp = key => {
  return upKeysThisFrame[key] === true
}

// reset at end of frame
const clear = () => {
  for (let key in downKeysThisFrame) {
    delete downKeysThisFrame[key]
  }
  for (let key in upKeysThisFrame) {
    delete upKeysThisFrame[key]
  }
}

const bind = target => {
  target.addEventListener('keydown', handleKeyDown)
  target.addEventListener('keyup', handleKeyUp)
  target.addEventListener('mousemove', handleMouseMove)
}

const unbind = target => {
  target.removeEventListener('keydown', handleKeyDown)
  target.removeEventListener('keyup', handleKeyUp)
  target.removeEventListener('mousemove', handleMouseMove)
}

let timeout

const handleMouseMove = event => {
  clearTimeout(timeout)
  const { movementX, movementY, clientX, clientY } = event
  mousePosition.x = clientX
  mousePosition.y = clientY
  mouseMove.x = movementX || 0
  mouseMove.y = movementY || 0
  timeout = setTimeout(clearMouseMove, 50)
}

const clearMouseMove = () => {
  mouseMove.x = 0
  mouseMove.y = 0
}

const getAxis = axis => {
  switch (axis) {
    case MouseX: return mouseMove.x
    case MouseY: return mouseMove.y
  }
}

const createButton = (name, ...keyCodes) => {
  buttons[name] = keyCodes
  return name
}

const getButton = name => {
  const button = buttons[name]
  if (!button) return false
  return button.some(getKey)
}

const getButtonDown = name => {
  const button = buttons[name]
  if (!button) return false
  return button.some(getKeyDown)
}

const getButtonUp = name => {
  const button = buttons[name]
  if (!button) return false
  return button.some(getKeyUp)
}

const isButton = (keyCode, name) => buttons[name] && buttons[name].includes(keyCode)

export default {
  bind,
  unbind,
  createButton,
  getKey,
  getAxis,
  getKeyDown,
  getButton,
  getButtonDown,
  getButtonUp,
  isButton,
  mousePosition,
  MouseX,
  MouseY,
  clear,
}
