/* global requestAnimationFrame */
import Time from './Time'

export default function loop (fn) {
  let id
  const step = time => {
    id = requestAnimationFrame(step)
    Time.update(time)
    fn(Time.deltaTime)
  }
  step()
  return () => cancelAnimationFrame(id)
}
