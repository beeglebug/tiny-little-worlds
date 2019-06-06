import React from 'react'
import WorldPreview from '../components/WorldPreview'
import Page from '../components/Page'

export default function UserPage ({ user, worlds = [] }) {
  return (
    <Page user={user}>
      <h2>my worlds</h2>
      <div>
        {worlds.map(game => (
          <WorldPreview
            key={game._id}
            {...game}
            author={user}
          />
        ))}
      </div>
    </Page>
  )
}
