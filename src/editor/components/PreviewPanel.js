import React, { lazy } from 'react'
import PanelPanel from './Panel'

const Preview = lazy(() => import('./Preview'))

export default function PreviewPanel () {
  return (
    <PanelPanel title={'preview'}>
      <Preview />
    </PanelPanel>
  )
}
