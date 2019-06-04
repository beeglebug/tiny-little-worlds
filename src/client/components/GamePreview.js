import React from 'react'

export default function GamePreview ({ user, name, description, slug }) {
  return (
    <div>
      <div>
        <a
          className='thumbnail'
          href={`/${user.slug}/${slug}`}
        >
          <img src={'/250x200.png'} />
        </a>
      </div>
      <a href={`/${user.slug}/${slug}`}>
        <h3>{name}</h3>
      </a>
      <div>{description}</div>
    </div>
  )
}
