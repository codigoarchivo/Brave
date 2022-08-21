import { createContext } from "react";

interface ContextProps {
    sidemenuOpen: boolean;
    
    // methods
    toggleSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps)