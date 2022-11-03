import { FC, ReactNode, useReducer } from "react";

import { UIContext, uiReducer } from "./";

export interface UIState {
    sidemenuOpen: boolean,
    lineProgress: boolean,
}

interface UIData {
    children: ReactNode
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    lineProgress: false,
}

export const UIProvider: FC<UIData> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - Toggle - Sidebar' })
    };

    const lineProgressMenu = () => {
        dispatch({ type: '[UI] - Linear - Progress' })
    };

    return (
        <UIContext.Provider value={{
            ...state,

            // methods
            toggleSideMenu,
            lineProgressMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}
