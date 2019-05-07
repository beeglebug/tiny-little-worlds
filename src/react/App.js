import React, { Fragment, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MapEditor from './MapEditor'
import Tileset from './Tileset'
import createStore from './state/store'
import Tools from './Tools'
import Preview from './Preview'
import Inspector from './Inspector'
import loadImage from './util/loadImage'
import SaveLoad from './SaveLoad'

const [ store, persistor ] = createStore()

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
      <PersistGate persistor={persistor}>
        {loading && 'loading...'}
        {!loading && (
          <Fragment>
            <MapEditor tileset={tileset} />
            {/*<Inspector />*/}
            <Tileset tileset={tileset} />
            <Tools />
            <Preview />
            <SaveLoad />
          </Fragment>
        )}
      </PersistGate>
    </Provider>
  )
}
