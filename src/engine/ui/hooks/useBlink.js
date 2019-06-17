import { useState } from 'react'
import useInterval from './useInterval'

export default function useBlink (initialVisible = true, delay = 500) {

  const [visible, setVisible] = useState(initialVisible)

  useInterval(() => {
    setVisible(!visible)
  }, delay)

  return [ visible ]
}
