import { useState } from 'react'
import useInterval from './useInterval'

export default function useTypewriterAnimation (str, delay = 50) {

  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useInterval(() => {
    const next = count + 1
    setCount(next)
    if (next >= str.length) {
      setIsRunning(false)
    }
  }, isRunning ? delay : null)

  return [
    str.slice(0, count),
    isRunning,
  ]
}
