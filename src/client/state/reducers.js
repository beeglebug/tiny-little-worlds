import { SET_MODAL_VISIBILITY } from './actions'

export default function modals (state = {}, action) {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        [action.payload.modal]: action.payload.visibility,
      }
    default: return state
  }
}
