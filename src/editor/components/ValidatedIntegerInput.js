import React, { useEffect, useState, useCallback } from 'react'
import Input from './Input'

/**
 * a numeric input which only allows integers between min and max values
 * changes are only emitted when valid
 */
export default function ValidatedIntegerInput ({ id, min, max, value, onChange }) {

  const [ localValue, setLocalValue ] = useState(value)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const isValid = useCallback(value => {
    return (
      value !== '' &&
      Number.isInteger(+value) &&
      value >= min &&
      value <= max
    )
  }, [min, max])

  const handleChange = useCallback(value => {

    setLocalValue(value)

    const valid = isValid(value)

    setError(!valid)

    // enforce integer to avoid strings
    if (valid) onChange(parseInt(value))

  }, [isValid, onChange])

  return (
    <Input
      type={'number'}
      id={id}
      min={min}
      max={max}
      value={localValue}
      onChange={handleChange}
      error={error}
    />
  )
}
