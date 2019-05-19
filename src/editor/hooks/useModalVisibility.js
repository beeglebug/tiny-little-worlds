import { modalVisibilitySelector } from '../state/selectors'
import { setModalVisibilityAction } from '../state/actions'
import useReduxState from './useReduxState'

export default function useModalVisibility (name) {
  return useReduxState(state => modalVisibilitySelector(state, name), visible => setModalVisibilityAction(name, visible))
}
