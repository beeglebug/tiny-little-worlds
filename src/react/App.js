import React from 'react'
import styles from './App.css'
import MapEditor from './MapEditor'
import Tileset from './Tileset'
import { Provider } from 'react-redux'
import store from './state/store'

export default function App () {

  const imagePath = '/tileset.png'
  const image = new Image()
  image.src = imagePath

  const tileset = {
    width: 64,
    height: 32,
    tileSize: 16,
    imagePath,
    image,
  }

  return (
    <div className={styles.container}>
      <Provider store={store}>
        <MapEditor tileset={tileset} />
        <Tileset tileset={tileset} />
      </Provider>
    </div>
  )
}
