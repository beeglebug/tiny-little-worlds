import React from 'react'
import Header from '../components/Header'
import WorldPreview from '../components/WorldPreview'

export default function AuthorPage ({ author, worlds = [] }) {
  return (
    <div>
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
    </div>
  )
}
