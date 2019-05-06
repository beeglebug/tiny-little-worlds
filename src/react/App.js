import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import styles from './App.css'
import MapEditor from './MapEditor'
import Tileset from './Tileset'
import createStore from './state/store'
import Tools from './Tools'
import Preview from './Preview'
import Inspector from './Inspector'

const [ store, persistor ] = createStore()

export default function App () {

  const imagePath = '/tileset.png'
  const image = new Image()
  image.src = imagePath

  const tileset = {
    width: 48,
    height: 32,
    tileSize: 16,
    imagePath,
    image,
  }

  return (
    <div className={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MapEditor tileset={tileset} />
          <Inspector />
          <Tileset tileset={tileset} />
          <Tools />
          <Preview />
        </PersistGate>
      </Provider>
    </div>
  )
}
