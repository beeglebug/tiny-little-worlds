import React from 'react'
import useModalVisibility from '../hooks/useModalVisibility'
import styles from './Header.css'
import WindowMenu from './WindowMenu'

export default function Header () {
  const [ , setVisible ] = useModalVisibility('login')
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Tiny Little Worlds</h1>
      </div>
      <div className={styles.right}>
        <WindowMenu />
        <button onClick={setVisible}>Log in</button>
      </div>
    </div>
  )
}
