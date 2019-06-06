import React from 'react'
import { hydrate } from 'react-dom'
import Header from './components/Header'

const props = window.__PRELOADED_PROPS__ || {}
const { user } = props

hydrate(<Header user={user} />, document.getElementById('mount'))
