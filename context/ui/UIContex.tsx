import { createContext } from "react";

interface ContextProps {
    sidemenuOpen: boolean;
    lightDarkMenu: string;

    // methods
    toggleSideMenu: () => void;
    openLigth: () => void;
}

export const UIContext = createContext({} as ContextProps)