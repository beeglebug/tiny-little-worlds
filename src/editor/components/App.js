import React, { useState, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import createStore from '../state/store'
import { setGameAction } from '../state/actions'
import validateGame from '../util/validateGame'
import PalettePanel from './PalettePanel'
import Tools from './Tools'
import SaveLoadPanel from './SaveLoadPanel'
import styles from './App.css'
import PreviewPanel from './PreviewPanel'
import MapEditorPanel from './MapEditorPanel'
import LoadingIndicator from './LoadingIndicator'
import Header from './Header'

const store = createStore()

export default function AppContainer () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App () {

  const [ loading, setLoading ] = useState(true)
  const dispatch = useDispatch()
  const url = '/assets/games/demo/index.json'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(validateGame)
      .catch(error => {
        console.error('Failed to load map data -', error)
      })
      .then(json => {
        if (!json) return
        dispatch(setGameAction(json))
        setLoading(false)
      })
  }, [url, dispatch])

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <PseudoSuspense loading={loading}>
          <MapEditorPanel />
          <PalettePanel />
          <Tools />
          <PreviewPanel />
          <SaveLoadPanel />
        </PseudoSuspense>
      </div>
    </div>
  )
}

function PseudoSuspense ({ loading, children }) {
  if (loading) return <LoadingIndicator />
  return children
}
