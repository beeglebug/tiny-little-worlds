import React from 'react'
import styles from './App.css'
import MapEditor from './MapEditor'
import Tileset from './Tileset'

export default function App () {

  const imagePath = '/tileset.png'
  const image = new Image()
  image.src = imagePath

  const map = {
    width: 16,
    height: 16,
    tileSize: 16,
    tileset: {
      width: 64,
      height: 32,
      tileSize: 16,
      imagePath,
      image,
    }
  }

  return (
    <div className={styles.container}>
      <MapEditor map={map} />
      <Tileset tileset={map.tileset}/>
    </div>
  )
}
