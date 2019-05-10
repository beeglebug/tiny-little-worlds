import React, { lazy } from 'react'
import PanelPanel from './Panel'

const MapEditor = lazy(() => import('./MapEditor'))

export default function MapEditorPanel ({ tileset }) {
  return (
    <PanelPanel title={'edit level'}>
      <MapEditor tileset={tileset} />
    </PanelPanel>
  )
}
