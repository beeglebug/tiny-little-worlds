import React from 'react'
import WorldPreview from '../components/WorldPreview'
import Page from '../components/Page'
import ButtonLink from '../components/ButtonLink'

export default function UserPage ({ user, worlds = [] }) {
  return (
    <Page user={user}>
      <ButtonLink href={'/create'}>Create New World</ButtonLink>
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
