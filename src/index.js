import React from 'react'
import { render } from 'react-dom'
import App from './react/App'
import './index.css'

const container = document.createElement('div')
document.body.appendChild(container)

render(<App />, container)
