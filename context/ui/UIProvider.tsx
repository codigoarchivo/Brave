import { FC, ReactNode, useReducer } from "react";

import { UIContext, uiReducer } from "./";

export interface UIState {
    sidemenuOpen: boolean,
    lightDarkMenu: string,
}

interface UIData {
    children: ReactNode
}

const manifest = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('change')
    } else {
        return null
    }
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    lightDarkMenu: manifest() ?? 'light',
}

export const UIProvider: FC<UIData> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - Toggle - Sidebar' })
    }

    const openLigth = () => {
        const change = state.lightDarkMenu === 'light' ? 'dark' : 'light'

        localStorage.setItem('change', change)

        dispatch({ type: '[UI] - OPEN - Light Dark', lightDarkMenu: change })
    }

    return (
        <UIContext.Provider value={{
            ...state,

            // methods
            toggleSideMenu,
            openLigth,
        }}>
            {children}
        </UIContext.Provider>
    )
}
