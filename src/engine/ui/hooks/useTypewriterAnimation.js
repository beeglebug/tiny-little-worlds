import { useState, useEffect } from 'react'
import useInterval from './useInterval'

export default function useTypewriterAnimation (text, delay = 50) {

  const [string, setString] = useState('')

  // reset when text changes
  useEffect(() => {
    setString('')
  }, [text])

  const isRunning = string.length < text.length

  useInterval(() => {
    const next = text.slice(0, string.length + 1)
    setString(next)
  }, isRunning ? delay : null)

  return string
}
