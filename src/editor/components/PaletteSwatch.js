import React from 'react'
import classnames from 'classnames'
import styles from './PaletteSwatch.css'

export default function PaletteSwatch ({ onClick, src, selected, title }) {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.swatch, selected && styles.selected)}
    >
      <img
        src={src}
        title={title}
      />
    </button>
  )
}
