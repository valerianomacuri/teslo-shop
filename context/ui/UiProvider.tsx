import { FC, ReactNode, useReducer } from 'react'
import { UiContext, uiReducer } from './'

export interface UiState {
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: UiState = {
  isMenuOpen: false,
}

export const UiProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  const toggleSideMenu = () => {
    dispatch({
      type: '[Ui] - ToggleMenu',
    })
  }
  return (
    <UiContext.Provider
      value={{
        ...state,

        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}
