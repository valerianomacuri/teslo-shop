import { UiState } from './UiProvider'

type UiActionType = {
  type: '[Ui] - ToggleMenu'
}

export const uiReducer = (state: UiState, action: UiActionType) => {
  switch (action.type) {
    case '[Ui] - ToggleMenu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    default:
      return state
  }
}
