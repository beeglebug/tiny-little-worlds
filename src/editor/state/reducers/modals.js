import { SET_MODAL_VISIBILITY } from '../actions'

const initialModalState = {
  resizeLevel: false,
  login: false,
}

export default function modals (state = initialModalState, action) {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        [action.payload.modal]: action.payload.visibility,
      }
    default: return state
  }
}
