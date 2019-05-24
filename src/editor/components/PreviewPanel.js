import React, { lazy, Suspense } from 'react'
import Panel from './Panel'
import Placeholder from './Placeholder'

const Preview = lazy(() => import('./Preview'))

export default function PreviewPanel () {
  return (
    <Panel
      name={'preview'}
      title={'preview'}
    >
      <Suspense fallback={<Placeholder />}>
        <Preview />
      </Suspense>
    </Panel>
  )
}
