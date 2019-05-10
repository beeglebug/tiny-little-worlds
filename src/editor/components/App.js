import React, { useState, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import createStore from '../state/store'
import { setGameAction } from '../state/actions'
import PalettePanel from './PalettePanel'
import Tools from './Tools'
import SaveLoadPanel from './SaveLoadPanel'
import styles from './App.css'
import PreviewPanel from './PreviewPanel'
import MapEditorPanel from './MapEditorPanel'
import Loader from './Loader'

const store = createStore()

export default function AppContainer () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App () {
  const [ loading ] = useLoadGameIntoRedux('/assets/games/demo/index.json')

  return (
    <div className={styles.container}>
      <PseudoSuspense loading={loading}>
        {/*<MapEditorPanel />*/}
        <PalettePanel />
        <Tools />
        <PreviewPanel />
        <SaveLoadPanel />
      </PseudoSuspense>
    </div>
  )
}

function PseudoSuspense ({ loading, children }) {
  if (loading) return <Loader />
  return children
}

function useLoadGameIntoRedux (url) {

  const [ loading, setLoading ] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Failed to load map data -', error)
      })
      .then(json => {
        if (!json) return
        dispatch(setGameAction(json))
        setLoading(false)
      })
  }, [url, dispatch])

  return [ loading ]
}
