import React, { lazy } from 'react'
import Panel from './Panel'

const MapEditor = lazy(() => import('./MapEditor'))

export default function MapEditorPanel ({ tileset }) {
  return (
    <Panel title={'edit level'}>
      <MapEditor tileset={tileset} />
    </Panel>
  )
}
