import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        // palette values for light mode
        background: {
            default: '#eee'
        },
        text: {
            secondary: '#121212'
        },
        primary: {
            main: '#2f92b7'
        },
        secondary: {
            main: '#121212'
        },
        error: {
            main: red.A400
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    paddingBottom: '14px !important'
                }
            }
        }
    }
})