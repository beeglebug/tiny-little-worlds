import React from 'react'
import styles from './Input.css'

export default function Input ({ onChange, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={styles.input}
      {...props}
      onChange={e => onChange(e.target.value)}
    />
  )
}
