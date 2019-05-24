import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGameAction } from '../state/actions'
import validateGame from '../util/validateGame'
import PalettePanel from './PalettePanel'
import ToolsPanel from './ToolsPanel'
import SaveLoadWindow from './windows/SaveLoadWindow'
import styles from './App.css'
import PreviewPanel from './PreviewPanel'
import MapEditorPanel from './MapEditorPanel'
import LoadingIndicator from './LoadingIndicator'
import Header from './Header'
import AboutPanel from './AboutPanel'
import Row from './Row'
import ExternalLink from './ExternalLink'
import LevelPropertiesWindow from './windows/LevelPropertiesWindow'
import ResizeLevelModal from './modals/ResizeLevelModal'

export default function App () {

  const [ loading, setLoading ] = useState(true)
  const dispatch = useDispatch()
  const url = '/game.json'

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
          <Row>
            <AboutPanel />
          </Row>
          <Row>
            <MapEditorPanel />
            <LevelPropertiesWindow />
            <PalettePanel />
            <ToolsPanel />
            <PreviewPanel />
            <SaveLoadWindow />
          </Row>
        </PseudoSuspense>
      </div>
      {!loading && <ResizeLevelModal />}
      <div className={styles.footer}>
        <ExternalLink href={'https://github.com/beeglebug/tiny-little-worlds'}>{`v${__VERSION}`}</ExternalLink>
      </div>
    </div>
  )
}

function PseudoSuspense ({ loading, children }) {
  if (loading) return <LoadingIndicator />
  return children
}
