import React from 'react'

export default function WorldPreview ({ author, name, description, slug }) {
  return (
    <div>
      <div>
        <a
          className='thumbnail'
          href={`/${author.slug}/${slug}`}
        >
          <img src={'/250x200.png'} />
        </a>
      </div>
      <a href={`/${author.slug}/${slug}`}>
        <h3>{name}</h3>
      </a>
      <div>{description}</div>
    </div>
  )
}
