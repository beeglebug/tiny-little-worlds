import React from 'react'
import Header from '../components/Header'
import WorldPreview from '../components/WorldPreview'
import Page from '../components/Page'

export default function AuthorPage ({ author, worlds = [] }) {
  return (
    <Page>
      <Header />
      <div>
        <h2>worlds by {author.authorname}</h2>
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
