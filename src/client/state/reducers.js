import { LOGOUT, SET_MODAL_VISIBILITY } from './actions'

export function modals (state = {}, action) {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        [action.payload.modal]: action.payload.visibility,
      }
    default: return state
  }
}

export function user (state = null, action) {
  switch (action.type) {
    case LOGOUT: return null
    default: return state
  }
}
