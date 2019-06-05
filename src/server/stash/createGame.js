import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import User from '../models/User'
import World from '../models/World'
import html from '../templates/index.html'
import GamePage from '../components/GamePage'
import EditorPage from '../components/EditorPage'
import { createStore } from 'redux/index'
import { flushToHTML } from 'styled-jsx/server'
import getAssetsForEntry from '../util/getAssetsForEntry'
import stats from '../../../dist/stats'
import { Provider } from 'react-redux'

const router = express.Router()

async function createGame (request, response) {

  const username = 'beeglebug'

  const user = await User.findOne({ username }).exec()

  // TODO slugs should be unique per user

  const game = new World({
    user,
    name: 'test game',
    slug: 'test',
    description: 'a test game',
  })

  await game.save()

  response.send('ok')
}
