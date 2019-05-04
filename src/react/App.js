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

  const map = {
    width: 16,
    height: 16,
    tileSize: 16,
    data: [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,2,2,2,2,2,2,2,2,0,0,0,0,0,
      0,0,0,2,1,1,1,1,1,1,2,2,2,2,2,0,
      0,0,0,2,1,1,1,1,1,1,1,0,0,0,2,0,
      0,0,0,2,1,1,1,1,1,1,2,2,2,0,2,0,
      0,0,0,2,1,1,1,1,1,1,2,0,2,0,2,0,
      0,0,0,2,2,2,2,2,2,2,2,0,2,0,2,0,
      0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,
      0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,
      0,0,0,0,0,0,0,0,2,2,2,2,2,0,2,0,
      0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,
      0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,
      0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,
      0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ],
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
      <Provider store={store}>
        <MapEditor map={map} />
        <Tileset tileset={map.tileset} />
      </Provider>
    </div>
  )
}
