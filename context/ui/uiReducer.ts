import { UIState } from './';
// UIState proviene del UIProvider interface

type UIActionType =
    | { type: '[UI] - Toggle - Sidebar' }
    | { type: '[UI] - Linear - Progress' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Toggle - Sidebar':
            return {
                ...state,
                sidemenuOpen: !state.sidemenuOpen
            }
        case '[UI] - Linear - Progress':
            return {
                ...state,
                lineProgress: !state.lineProgress
            }
        default:
            return state

    }
}