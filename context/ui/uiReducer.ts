import { UIState } from './';
// UIState proviene del UIProvider interface

type UIActionType =
    | { type: '[UI] - Toggle - Sidebar' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Toggle - Sidebar':
            return {
                ...state,
                sidemenuOpen: !state.sidemenuOpen
            }
        default:
            return state

    }
}