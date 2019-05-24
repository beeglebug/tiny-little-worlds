import React, { lazy, Suspense } from 'react'
import Panel from '../Panel'
import Placeholder from '../Placeholder'

const SaveLoad = lazy(() => import('./SaveLoad'))

export default function SaveLoadWindow () {
  return (
    <Panel
      name='saveLoad'
      title={'save / load'}
    >
      <Suspense fallback={<Placeholder />}>
        <SaveLoad />
      </Suspense>
    </Panel>
  )
}
