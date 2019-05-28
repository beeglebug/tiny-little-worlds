import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ValidatedIntegerInput from './ValidatedIntegerInput'

storiesOf('ValidatedIntegerInput', module)
  .add('with text', () => (
    <ValidatedIntegerInput
      id={'test'}
      min={0}
      max={10}
      value={5}
      onChange={action('onChange')}
    />
  ))
