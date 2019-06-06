import React from 'react'
import WorldPreview from '../components/WorldPreview'
import Page from '../components/Page'

export default function AuthorPage ({ user, author, worlds = [] }) {
  return (
    <Page user={user}>
      <h2>worlds by {author.username}</h2>
      <div>
        {worlds.map(game => (
          <WorldPreview
            key={game._id}
            {...game}
            author={author}
          />
        ))}
      </div>
    </Page>
  )
}
