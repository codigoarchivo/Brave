import { UIState } from './';
// UIState proviene del UIProvider interface

type UIActionType =
    | { type: 'UI - OPEN Sidebar' }
    | { type: 'UI - CLOSE Sidebar' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI - OPEN Sidebar':
            return {
                ...state,
                sidemenuOpen: true
            }
        case 'UI - CLOSE Sidebar':
            return {
                ...state,
                sidemenuOpen: false
            }
        default:
            return state

    }
}