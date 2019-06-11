import React from 'react'
import ReactDOM from 'react-dom'
import UI from './components/UI'

export default function () {

  const element = document.createElement('div')
  const ref = React.createRef()

  ReactDOM.render(<UI ref={ref} />, element)

  return {
    element,
    ref,
  }
}
