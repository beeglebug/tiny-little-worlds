import React from 'react'
import classnames from 'classnames'
import styles from './Input.css'

export default function Input ({ onChange, type = 'text', error, ...props }) {
  return (
    <input
      type={type}
      {...props}
      className={classnames(styles.input, error && styles.error)}
      onChange={e => onChange(e.target.value)}
    />
  )
}
