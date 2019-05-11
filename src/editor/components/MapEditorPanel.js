import React, { lazy, Suspense } from 'react'
import Panel from './Panel'
import styles from './MapEditorPanel.css'
import LoadingIndicator from './LoadingIndicator'

const MapEditor = lazy(() => import('./MapEditor'))

export default function MapEditorPanel () {
  return (
    <Panel title={'edit level'}>
      <Suspense fallback={<Placeholder />}>
        <MapEditor />
      </Suspense>
    </Panel>
  )
}

function Placeholder () {
  return (
    <div className={styles.loading}>
      <LoadingIndicator />
    </div>
  )
}
