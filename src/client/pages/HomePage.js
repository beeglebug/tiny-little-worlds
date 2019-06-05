import React from 'react'
import Header from '../components/Header'
import WorldPreview from '../components/WorldPreview'
import Page from '../components/Page'

export default function HomePage ({ worlds = [] }) {
  return (
    <Page>
      <Header />
      <div>
        <h2>latest worlds</h2>
        <div>
          {worlds.map(world => (
            <WorldPreview
              key={world._id}
              {...world}
            />
          ))}
        </div>
      </div>
    </Page>
  )
}
