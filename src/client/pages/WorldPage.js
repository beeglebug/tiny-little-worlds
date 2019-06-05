import React from 'react'
import Header from '../components/Header'

export default function WorldPage ({ author, world }) {
  return (
    <div>
      <Header />
      <img src={'/640x400.png'} />
      <h2>
        {world.name}
        <small>by <a href={`/${author.slug}`}>{author.username}</a></small>
      </h2>
      <p>{world.description}</p>
    </div>
  )
}
