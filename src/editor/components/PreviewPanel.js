import React, { lazy, Suspense } from 'react'
import Panel from './Panel'
import LoadingIndicator from './LoadingIndicator'
import styles from './PreviewPanel.css'

const Preview = lazy(() => import('./Preview'))

export default function PreviewPanel () {
  return (
    <Panel title={'preview'}>
      <Suspense fallback={<Placeholder />}>
        <Preview />
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
