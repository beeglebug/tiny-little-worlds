import React from 'react'
import Page from '../components/Page'

export default function WorldPage ({ user, author, world }) {
  return (
    <Page user={user}>
      <img src={'/640x400.png'} />
      <h2>
        {world.name}
        <small>by <a href={`/${author.slug}`}>{author.username}</a></small>
      </h2>
      <p>{world.description}</p>
      <a href={`/${author.slug}/${world.slug}/edit`}>edit</a>
    </Page>
  )
}
