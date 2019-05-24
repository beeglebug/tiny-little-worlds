import { SET_WINDOW_VISIBILITY } from '../actions'

const initialWindowState = {
  about: true,
  mapEditor: true,
  levelProperties: false,
  palette: true,
  tools: true,
  preview: true,
  saveLoad: false,
}

export default function windows (state = initialWindowState, action) {
  switch (action.type) {
    case SET_WINDOW_VISIBILITY:
      return {
        ...state,
        [action.payload.window]: action.payload.visibility,
      }
    default: return state
  }
}
