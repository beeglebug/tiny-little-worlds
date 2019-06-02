import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import useModalVisibility from '../../editor/hooks/useModalVisibility'
import styles from './Header.css'

export default function Header () {

  useStyles(styles)

  const [ , setVisible ] = useModalVisibility('login')

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Tiny Little Worlds</h1>
      </div>
      <div className={styles.right}>
        <button onClick={setVisible}>Log in</button>
      </div>
    </div>
  )
}
