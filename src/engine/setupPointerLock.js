export default (controller, domElement) => {

  const pointerLockSupport = 'pointerLockElement' in document

  if (!pointerLockSupport) {
    return console.error('No Pointer Lock API Support')
  }

  const handlePointerLockChange = () => {
    console.log('pl change')
    if (document.pointerLockElement === domElement) {
      enterPointerLock()
    } else {
      leavePointerLock()
    }
  }

  const enterPointerLock = () => {
    controller.enabled = true
    // app.focus()
  }

  const leavePointerLock = () => {
    controller.enabled = false
    // app.blur()
  }

  const handlePointerLockError = () => {
    return console.error('Pointer Lock Error')
  }

  document.addEventListener('pointerlockchange', handlePointerLockChange)
  document.addEventListener('pointerlockerror', handlePointerLockError)

  domElement.requestPointerLock()
}
