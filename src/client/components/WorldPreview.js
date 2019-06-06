import React from 'react'
import css from 'styled-jsx/css'

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
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  img {
    width: 250px;
    height: 200px;
    background-color: #666;
  }
`
