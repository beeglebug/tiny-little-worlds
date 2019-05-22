import React from 'react'
import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'

const client = bugsnag({
  apiKey: '8e5064d22138ece6973c0251729945e7',
  appVersion: __VERSION,
  releaseStage: __ENVIRONMENT,
  notifyReleaseStages: ['production'],
})

client.use(bugsnagReact, React)

export default client
