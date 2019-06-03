import React from 'react'
import { windowVisibilitySelector } from '../state/selectors'
import { setWindowVisibilityAction } from '../state/actions'
import Window from '../../client/components/Window'
import useReduxState from '../../client/hooks/useReduxState'

export default function WindowWithVisibility (props) {

  const [ visible, setVisible ] = useReduxState(state => windowVisibilitySelector(state, props.name), visible => setWindowVisibilityAction(props.name, visible))

  if (!visible) return null

  return (
    <Window
      {...props}
      onClose={() => setVisible(name, false)}
    />
  )
}
