import React, { useState } from 'react'
import { Provider } from 'react-redux'
import createStore from '../state/store'
import loadImage from '../util/loadImage'
import MapEditor from './MapEditor'
import Palette from './Palette'
import Tools from './Tools'
import SaveLoad from './SaveLoad'
import styles from './App.css'
import PreviewPanel from './PreviewPanel'

const store = createStore()

export default function App () {

  const [ loading, setLoading ] = useState(true)

  loadImage('./assets/tileset.png')
    .then(image => {
      tileset.image = image
      setLoading(false)
    })

  const tileset = {
    width: 48,
    height: 16,
    tileSize: 16,
  }

  return (
    <Provider store={store}>
      {loading && 'loading...'}
      {!loading && (
        <div className={styles.container}>
          <MapEditor tileset={tileset} />
          <Palette tileset={tileset} />
          <Tools />
          <PreviewPanel />
          <SaveLoad />
        </div>
      )}
    </Provider>
  )
}
