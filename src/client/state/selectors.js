export const modalVisibilitySelector = (state, modal) => {
  if (modal) return state.modals[modal]
  return state.modals
}
