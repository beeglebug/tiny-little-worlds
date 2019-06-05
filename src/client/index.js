import React from 'react'
import { hydrate } from 'react-dom'
import Header from './components/Header'

hydrate(<Header />, document.getElementById('mount'))
