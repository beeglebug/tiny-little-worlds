import React from 'react'
import WorldPreview from '../components/WorldPreview'
import Page from '../components/Page'

export default function AuthorPage ({ author, worlds = [] }) {
  return (
    <Page>
      <div>
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
      </div>
    </Page>
  )
}
