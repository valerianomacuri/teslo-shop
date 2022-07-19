import { createContext, useContext } from 'react'

interface ContextProps {
  isMenuOpen: boolean
  toggleSideMenu: () => void
}

export const UiContext = createContext({} as ContextProps)
export const useUI = () => useContext(UiContext)
