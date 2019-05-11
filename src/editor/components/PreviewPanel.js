import React, { lazy } from 'react'
import Panel from './Panel'

const Preview = lazy(() => import('./Preview'))

export default function PreviewPanel () {
  return (
    <Panel title={'preview'}>
      <Preview />
    </Panel>
  )
}
