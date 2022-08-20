import { grey, red } from "@mui/material/colors";

export const lightDarkTheme = (mode: any) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                background: {
                    default: '#efedee'
                },
                primary: {
                    main: '#fec80b'
                },
                secondary: {
                    main: '#000000'
                },
                error: {
                    main: red.A400
                },
            }
            : {
                // palette values for dark mode
                background: {
                    default: grey[300]
                },
                primary: {
                    main: '#4a148c'
                },
                secondary: {
                    main: '#19857b'
                },
                error: {
                    main: red.A400
                },
            }),
    },
});
