export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY'

export const setModalVisibilityAction = (modal, visibility) => ({
  type: SET_MODAL_VISIBILITY,
  payload: { modal, visibility },
})
