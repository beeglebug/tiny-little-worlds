import { SET_WINDOW_VISIBILITY } from '../actions'

const initialWindowState = {
  about: true,
  inspector: true,
  levelProperties: false,
  mapEditor: true,
  palette: true,
  preview: true,
  saveLoad: false,
  tools: true,
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
