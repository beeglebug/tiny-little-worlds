import React from 'react'
import Header from '../../components/Header'

export default function GamePage ({ user, game }) {
  return (
    <div>
      <Header />
      <img src={'/640x400.png'} />
      <h2>
        {game.name}
        <small>by <a href={`/${user.slug}`}>{user.username}</a></small>
      </h2>
      <p>{game.description}</p>
    </div>
  )
}
