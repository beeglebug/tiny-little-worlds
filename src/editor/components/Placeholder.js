import React from 'react'
import styles from './Placeholder.css'
import LoadingIndicator from './LoadingIndicator'

export default function Placeholder () {
  return (
    <div className={styles.loading}>
      <LoadingIndicator />
    </div>
  )
}
