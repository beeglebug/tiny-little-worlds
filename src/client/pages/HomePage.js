import React from 'react'
import WorldPreview from '../components/WorldPreview'
import Page from '../components/Page'
import ButtonLink from '../components/ButtonLink'

export default function HomePage ({ user, worlds = [] }) {
  return (
    <Page user={user}>
      <ButtonLink href={'/create'}>Create New World</ButtonLink>
      <h2>latest worlds</h2>
      <div>
        {worlds.map(world => (
          <WorldPreview
            key={world._id}
            {...world}
          />
        ))}
      </div>
    </Page>
  )
}
