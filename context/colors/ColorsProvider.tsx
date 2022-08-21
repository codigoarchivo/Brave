import { FC, ReactNode, useState, useMemo, useEffect } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';

import { lightDarkTheme } from '../../themes';

import { ColorsContext } from './';


interface PropsChildren {
    children: ReactNode
}

export const ColorsProvider: FC<PropsChildren> = ({ children }) => {

    const [mode, setMode] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMode(localStorage.getItem('change'))
        }
    }, [])
    
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const nexMode = prevMode === 'light' ? 'dark' : 'light'
                    localStorage.setItem('change', nexMode)
                    return nexMode
                }
                );
            },
        }),
        [],
    );

    const theme = useMemo(() => createTheme(lightDarkTheme(mode ?? 'light')), [mode]);

    return (
        <ColorsContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorsContext.Provider>
    )
}