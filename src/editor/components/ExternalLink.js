import React from 'react'

export default function ExternalLink ({ href, children }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  )
}
