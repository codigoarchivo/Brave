import { UIState } from './';
// UIState proviene del UIProvider interface

type UIActionType =
    | { type: 'UI - OPEN - ClOSE Sidebar', payload: boolean }


export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI - OPEN - ClOSE Sidebar':
            return {
                ...state,
                sidemenuOpen: action.payload 
            }
        default:
            return state

    }
}