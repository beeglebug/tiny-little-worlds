import React from 'react'
import Header from '../components/Header'
import WorldPreview from '../components/WorldPreview'

export default function HomePage ({ worlds = [] }) {
  return (
    <div>
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
    </div>
  )
}
