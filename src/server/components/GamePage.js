import React from 'react'

export default function GamePage ({ user, game }) {
  return (
    <div>
      <h1>
        {game.name}
        <small>by <a href={`/${user.username}`}>{user.username}</a></small>
      </h1>
      <p>{game.description}</p>
      <a href={`/${user.username}/${game.slug}/edit`}>edit this game</a>
    </div>
  )
}

// TODO user.slug and game.slug
