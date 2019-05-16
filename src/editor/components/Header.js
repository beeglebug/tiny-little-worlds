import React from 'react'
import styles from './Header.css'
import WindowMenu from './WindowMenu'

export default function Header () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tiny Little Worlds</h1>
      <WindowMenu />
    </div>
  )
}
