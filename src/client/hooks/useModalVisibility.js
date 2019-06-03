import { modalVisibilitySelector } from '../state/selectors'
import { setModalVisibilityAction } from '../state/actions'
import useReduxState from './useReduxState'

// TODO return open and close functions
export default function useModalVisibility (name) {
  return useReduxState(state => modalVisibilitySelector(state, name), visible => setModalVisibilityAction(name, visible))
}
