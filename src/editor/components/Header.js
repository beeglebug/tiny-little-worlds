import React from 'react'
import styles from './Header.css'
import WindowMenu from './WindowMenu'

export default function Header () {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Tiny Little Worlds</h1>
      </div>
      <div className={styles.right}>
        <WindowMenu />
        <a
          href="/login"
          style={{ marginLeft: 10 }}
        >login</a>
      </div>
    </div>
  )
}
