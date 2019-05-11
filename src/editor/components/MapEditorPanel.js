import React, { lazy } from 'react'
import PanelPanel from './Panel'

const MapEditor = lazy(() => import('./MapEditor'))

export default function MapEditorPanel () {
  return (
    <PanelPanel title={'edit level'}>
      <MapEditor />
    </PanelPanel>
  )
}
