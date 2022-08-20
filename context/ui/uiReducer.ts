import { UIState } from './';
// UIState proviene del UIProvider interface

type UIActionType =
    | { type: '[UI] - Toggle - Sidebar' }
    | { type: '[UI] - OPEN - Light Dark', lightDarkMenu: string }


export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Toggle - Sidebar':
            return {
                ...state,
                sidemenuOpen: !state.sidemenuOpen
            }
        case '[UI] - OPEN - Light Dark':
            return {
                ...state,
                lightDarkMenu: action.lightDarkMenu
            }
        default:
            return state

    }
}