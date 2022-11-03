import { createContext } from "react";

interface ContextProps {
    sidemenuOpen: boolean;
    lineProgress: boolean;

    // methods
    toggleSideMenu: () => void;
    lineProgressMenu: () => void;
}

export const UIContext = createContext({} as ContextProps)