import React, { Suspense } from 'react'
import styles from './Panel.css'
import Loader from './Loader'

export default function Panel ({ title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={styles.body}>
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
