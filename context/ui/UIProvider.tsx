import { FC, ReactNode, useReducer } from "react";

import { UIContext, uiReducer } from "./";

export interface UIState {
    sidemenuOpen: boolean,
}

interface UIData {
    children: ReactNode
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}

export const UIProvider: FC<UIData> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({ type: 'UI - OPEN Sidebar' })
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - CLOSE Sidebar' })
    }

    return (
        <UIContext.Provider value={{
            ...state,

            // methods
            openSideMenu,
            closeSideMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}
