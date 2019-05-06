import React, { Fragment, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MapEditor from './MapEditor'
import Tileset from './Tileset'
import createStore from './state/store'
import Tools from './Tools'
import Preview from './Preview'
import Inspector from './Inspector'

const [ store, persistor ] = createStore()

export default function App () {

  const [ loading, setLoading ] = useState(true)

  const imagePath = './assets/tileset.png'
  const image = new Image()
  image.addEventListener('load', () => {
    setLoading(false)
  })
  image.src = imagePath

  const tileset = {
    width: 48,
    height: 32,
    tileSize: 16,
    imagePath,
    image,
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {loading && 'loading...'}
        {!loading && (
          <Fragment>
            <MapEditor tileset={tileset} />
            <Inspector />
            <Tileset tileset={tileset} />
            <Tools />
            <Preview />
          </Fragment>
        )}
      </PersistGate>
    </Provider>
  )
}
